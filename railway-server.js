// Railway uchun: dist/server/server.js faqat { fetch } eksport qiladi (Cloudflare/Web
// standard uslubida), o'z-o'zidan HTTP serverni ishga tushirmaydi. Bu fayl uni Node
// http serverga o'rab, statik fayllarni (dist/client) ham xizmat qiladi.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const CLIENT_DIR = join(__dirname, "dist", "client");
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function tryServeStatic(pathname) {
  const safePath = pathname.split("?")[0];
  const filePath = join(CLIENT_DIR, decodeURIComponent(safePath));
  if (!filePath.startsWith(CLIENT_DIR)) return null;
  try {
    const s = await stat(filePath);
    if (!s.isFile()) return null;
    const body = await readFile(filePath);
    const type = MIME[extname(filePath)] ?? "application/octet-stream";
    return { body, headers: { "content-type": type } };
  } catch {
    return null;
  }
}

const { default: handler } = await import("./dist/server/server.js");

const server = createServer(async (req, res) => {
  try {
    if (req.url && req.url !== "/") {
      const staticFile = await tryServeStatic(req.url);
      if (staticFile) {
        res.writeHead(200, staticFile.headers);
        res.end(staticFile.body);
        return;
      }
    }

    const url = `http://${req.headers.host ?? `localhost:${PORT}`}${req.url}`;
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value == null) continue;
      headers.set(key, Array.isArray(value) ? value.join(", ") : value);
    }

    let body;
    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      body = Buffer.concat(chunks);
    }

    const request = new Request(url, { method: req.method, headers, body });
    const response = await handler.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    if (response.body) {
      const buf = Buffer.from(await response.arrayBuffer());
      res.end(buf);
    } else {
      res.end();
    }
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});