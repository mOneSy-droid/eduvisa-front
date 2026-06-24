import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  Phone, Menu, X, ArrowRight, GraduationCap, FileText, Plane, Award, Home, Compass,
  Star, Linkedin, Send, MapPin, Mail, Clock, Instagram, ChevronDown, Check,
  Heart, MessageCircle, Calculator, ArrowUp, Sparkles, Globe2, CalendarDays,
  ChevronLeft, ChevronRight, GitCompare,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal, CountUp } from "@/components/reveal";
import { LanguageSwitcher, LanguageSwitcherMobile } from "@/components/language-switcher";
import cCY from "@/assets/cyprus.png";
import cAU from "@/assets/country-australia.jpg";
import cCA from "@/assets/country-canada.jpg";
import cMY from "@/assets/malaysia.png";
import cDE from "@/assets/germany.png";
import cSG from "@/assets/singapore.png";
import cLV from "@/assets/latvia.png";
import cIT from "@/assets/italy.png";
import uFIU from "@/assets/finaluniversity.png";
import uCSU from "@/assets/cyprusscienceuniversity.png";
import uKyr from "@/assets/kyreniauniversity.png";
import uELU from "@/assets/europeanleadershipuniversity.png";
import uArk from "@/assets/arkinuniversity.png";
import uCIU from "@/assets/cyprusinternationaluniversity.png";
import uGAU from "@/assets/girneamericanuniversity.png";
import uNEU from "@/assets/neareastuniversity.png";
import uEMU from "@/assets/easternmediterraneanuniversity.png";
import uBAU from "@/assets/bahcesehircyprusuniversity.png";
import uTGC from "@/assets/trentglobalcollege.png";
import uSIM from "@/assets/singaporeinternationaluniversity.png";
import uAMI from "@/assets/amesinternationaluniversity.png";
import uNIM from "@/assets/nanyanginstitute.png";
import uCUR from "@/assets/curtinuniversity.png";
import uJCU from "@/assets/jamescookuniversity.png";
import uKAP from "@/assets/kaplanuniversity.png";
import uPSB from "@/assets/psbuniversity.png";
import uMDIS from "@/assets/mdisinternationaluniversity.png";
import uEAIM from "@/assets/eastasiainstitute.png";
import uINTI from "@/assets/intiuniversity.png";
import uMAHSA from "@/assets/mahsainternationaluniversity.png";
import uCUM from "@/assets/cityuniversitymalaysia.png";
import uAPU from "@/assets/asia-pacific-university.png";
import uSEGI from "@/assets/segi.png";
import uUCSI from "@/assets/ucsi.png";
import uMSU from "@/assets/msu.png";
import uCYB from "@/assets/cyberjayauniversity.png";
import uNILAI from "@/assets/nilaiuniversity.png";
import uLUC from "@/assets/lincoln.png";
import uCDU from "@/assets/cdu.jpg";
import uUSQ from "@/assets/usq.jpg";
import uFED from "@/assets/federation.jpg";
import uVU from "@/assets/victoria.jpg";
import uCQU from "@/assets/cqu.jpg";
import uUC from "@/assets/canberra.jpg";
import uWSU from "@/assets/wsu.jpg";
import uLTU from "@/assets/latrobe.jpg";
import uDEA from "@/assets/deakin.jpg";
import uGRI from "@/assets/griffith.jpg";
import uBSBI from "@/assets/bsbi.png";
import uIU from "@/assets/iu.png";
import uGISMA from "@/assets/gisma.png";
import uSRH from "@/assets/srh.png";
import uARDEN from "@/assets/arden.png";
import uUE from "@/assets/ue.png";
import uCBS from "@/assets/cbs.png";
import uMAC from "@/assets/macromedia.png";
import uFRE from "@/assets/fresenius.png";
import uCON from "@/assets/constructor.png";

import uMUN from "@/assets/mun.png";
import uUPEI from "@/assets/upei.png";
import uBU from "@/assets/brandon.png";
import uUCW from "@/assets/ucw.png";
import uCBU from "@/assets/cbu.png";
import uTRU from "@/assets/tru.png";
import uUNB from "@/assets/unb.png";
import uYU from "@/assets/yorkville.png";
import uMSVU from "@/assets/msvu.png";
import uUOR from "@/assets/regina.png";

import uEKA from "@/assets/eka.png";
import uTTI from "@/assets/tti.png";
import uTUR from "@/assets/turiba.png";
import uRIS from "@/assets/riseba.png";
import uBIA from "@/assets/bia.png";
import uISM from "@/assets/ismi.png";
import uUEC from "@/assets/uec.png";
import uVEN from "@/assets/ventspils.png";
import uDAU from "@/assets/daugavpils.png";
import uRTA from "@/assets/rta.png";

import uPISA from "@/assets/pisa.png";
import uSIENA from "@/assets/siena.png";
import uFLO from "@/assets/florence.png";
import uBOL from "@/assets/bologna.png";
import uPAD from "@/assets/padua.png";
import uPAV from "@/assets/pavia.png";
import uMIL from "@/assets/milan.png";
import uTRE from "@/assets/trento.png";
import uPAL from "@/assets/palermo.png";
import uCAM from "@/assets/camerino.png";

import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import ts1 from "@/assets/testimonial-1.jpg";
import ts2 from "@/assets/testimonial-2.jpg";
import ts3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eduvisa — Kelajagingiz xorijdan boshlanadi | CHET ELDA TA'LIM" },
      { name: "description", content: "O'zbekistondagi eng ishonchli ta'lim konsalting markazi. UK, USA, Canada, Australia universitetlariga qabul, viza va stipendiya yordami." },
      { property: "og:title", content: "Eduvisa — Kelajagingiz xorijdan boshlanadi" },
      { property: "og:description", content: "Premium ta'lim konsalting markazi. 1200+ talaba, 50+ davlat, 95% qabul ko'rsatkichi." },
    ],
  }),
  component: Index,
});

function useNavLinks() {
  const { t } = useTranslation();
  return [
    { label: t("nav.results"), href: "#results" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.destinations"), href: "#destinations" },
    { label: t("nav.transfer"), href: "#transfer" },
    { label: t("nav.universities"), href: "#universities" },
    { label: t("nav.map"), href: "#map" },
    { label: t("nav.contact"), href: "#contact" },
  ];
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function Navbar() {
  const { t } = useTranslation();
  const navLinks = useNavLinks();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(["results", "services", "destinations", "transfer", "universities", "team", "contact"]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-b border-[#0D1B2A]/8 shadow-[0_4px_30px_-15px_rgba(15,27,42,0.15)]"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <img src="/eduvisa.png" alt="Eduvisa logo" className="h-14 w-auto object-contain"/>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight text-[#0D1B2A]">Eduvisa</div>
            <div className="text-[10px] tracking-[0.2em] text-[#A68B52] font-semibold">{t("nav.tagline")}</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-[#0D1B2A]" : "text-[#0D1B2A]/65 hover:text-[#0D1B2A]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+998888831199" className="flex items-center gap-2 text-sm text-[#0D1B2A]/75 hover:text-[#0D1B2A] transition-colors">
            <Phone className="h-4 w-4" /> +998 88 8831199
          </a>
          <LanguageSwitcher />
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] text-sm font-semibold hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 shadow-gold"
          >
            {t("nav.consultation")}
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-11 w-11 grid place-items-center rounded-xl bg-[#0D1B2A]/8 text-[#0D1B2A]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-2xl font-display text-[#0D1B2A] hover:text-[#A68B52]">
              {l.label}
            </a>
          ))}
          <LanguageSwitcherMobile />
          <a href="tel:+998 88 883 11 99" className="mt-4 flex items-center gap-2 text-[#0D1B2A]/70"><Phone className="h-4 w-4" /> +998 88 8831199</a>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-5 py-3.5 rounded-[14px] bg-gold text-[#0D1B2A] text-center font-semibold">
            {t("nav.getConsultation")}
          </a>
        </div>
      </div>
    </header>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: `${(i * 53) % 100}%`,
        size: 4 + ((i * 7) % 8),
        delay: (i % 9) * 1.2,
        duration: 14 + (i % 6) * 3,
        opacity: 0.25 + ((i % 5) * 0.1),
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-[var(--gold)] animate-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const px = (mult: number) => ({ transform: `translateY(${scrollY * mult}px)` });
  const flags = ["🇲🇾", "🇺🇸", "🇨🇦", "🇨🇾", "🇳🇿", "🇸🇬"];
  const unis = ["Jain University", "Inti University", "Mahsa University", "Final University", "City University"];
  return (
    <section id="home" className="relative min-h-screen pt-28 lg:pt-32 pb-24 hero-gradient overflow-hidden">
      {/* Soft blurred floating shapes */}
      <div className="absolute top-[-10%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#C8A971]/25 blur-3xl animate-blob" />
      <div className="absolute top-[20%] right-[-8%] h-[32rem] w-[32rem] rounded-full bg-[#7DA7F5]/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-[-15%] left-[20%] h-[26rem] w-[26rem] rounded-full bg-[#A78BFA]/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0D1B2A 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up" style={px(0.06)}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#C8A971]/40 backdrop-blur-md shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-[#A68B52]" />
            <span className="text-xs font-semibold tracking-wider text-[#0D1B2A]">{t("hero.badge")}</span>
          </div>
          <h1 className="mt-7 font-display font-bold text-[clamp(2.4rem,5.6vw,4.7rem)] leading-[1.04] tracking-tight text-[#0D1B2A]">
            {t("hero.titleLine1")}<br />
            <span className="bg-gradient-to-r from-[#C8A971] via-[#A68B52] to-[#C8A971] bg-clip-text text-transparent">{t("hero.titleHighlight")}</span> {t("hero.titleSuffix")}
          </h1>
          <p className="mt-6 text-lg text-[#0D1B2A]/70 max-w-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* Trust badges */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              { i: "👨‍🎓", t: t("hero.badge1") },
              { i: "🎓", t: t("hero.badge2") },
              { i: "✅", t: t("hero.badge3") },
            ].map((b) => (
              <div key={b.t} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur border border-[#0D1B2A]/8 text-xs font-semibold text-[#0D1B2A] shadow-soft">
                <span>{b.i}</span>{b.t}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] shadow-gold">
              {t("hero.ctaPrimary")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#universities" className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-white/80 backdrop-blur border border-[#0D1B2A]/12 text-[#0D1B2A] font-semibold hover:bg-white transition-all duration-200 hover:scale-[1.02]">
              {t("hero.ctaSecondary")}
            </a>
          </div>

        </div>

        <div className="relative" style={px(-0.05)}>
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_40px_100px_-30px_rgba(15,27,42,0.35)]">
            <img src="/students.png" alt={t("hero.studentsImgAlt")} width={1024} height={1280} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-4 sm:-left-10 top-8 px-5 py-4 rounded-2xl glass-card animate-float">
            <div className="font-display text-3xl font-bold text-[#0D1B2A]"><CountUp end={1200} suffix="+" /></div>
            <div className="text-xs text-[#0D1B2A]/65 mt-0.5">{t("hero.floatStudents")}</div>
          </div>

          <div className="absolute -right-3 sm:-right-6 top-1/3 px-4 py-3 rounded-2xl glass-card animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="text-[10px] font-semibold tracking-wider text-[#0D1B2A]/60 uppercase mb-1.5">{t("hero.floatCountries")}</div>
            <div className="flex gap-1.5 text-xl">
              {flags.map((f) => <span key={f}>{f}</span>)}
            </div>
          </div>

          <div className="absolute -left-2 sm:-left-8 bottom-6 px-5 py-4 rounded-2xl glass-card animate-float max-w-[16rem]" style={{ animationDelay: "3s" }}>
            <div className="text-[10px] font-semibold tracking-wider text-[#0D1B2A]/60 uppercase mb-2">{t("hero.floatPartners")}</div>
            <div className="flex flex-wrap gap-1.5">
              {unis.map((u) => (
                <span key={u} className="px-2 py-0.5 rounded-md bg-[#0D1B2A]/8 text-[11px] font-semibold  text-[#0D1B2A]">{u}</span>
              ))}
            </div>
          </div>

          <div className="absolute -right-2 bottom-10 px-4 py-3 rounded-2xl glass-card animate-float" style={{ animationDelay: "2.2s" }}>
            <div className="font-display text-2xl font-bold text-[#0D1B2A]"><CountUp end={95} suffix="%" /></div>
            <div className="text-[11px] text-[#0D1B2A]/65">{t("hero.floatVisa")}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#services" aria-label="Scroll" className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#0D1B2A]/55 hover:text-[#0D1B2A] transition-colors">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">{t("hero.scroll")}</span>
        <span className="h-10 w-6 rounded-full border-2 border-current grid place-items-start p-1">
          <span className="h-2 w-1 rounded-full bg-current animate-bounce" />
        </span>
      </a>
    </section>
  );
}

function Stats() {
  const { t } = useTranslation();
  const stats = [
    { v: 1200, s: "+", l: t("stats.students") },
    { v: 6, s: t("stats.experienceSuffix"), l: t("stats.experience") },
    { v: 150, s: "+", l: t("stats.partners") },
    { v: 28, s: "", l: t("stats.countries") },
  ];
  return (
    <section className="py-20 bg-[var(--soft)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="text-center">
              <div className="font-display text-5xl lg:text-6xl font-bold text-[#0D1B2A]">
                <CountUp end={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 text-sm text-[var(--muted-foreground)]">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub, icon: Icon }: { eyebrow: string; title: string; sub?: string; icon?: typeof GraduationCap }) {
  return (
    <Reveal>
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-[#A68B52] text-xs font-semibold tracking-wider uppercase">
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </div>
        <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl text-[#0D1B2A]">{title}</h2>
        {sub && <p className="mt-4 text-[var(--muted-foreground)] text-lg">{sub}</p>}
      </div>
    </Reveal>
  );
}

const resultsData: { name: string; university: string; country: string; photo: string }[] = [
  { name: "Madina Yusupova", university: "University of Oxford", country: "United Kingdom", photo: "1.png" },
  { name: "Sardor Aliyev", university: "University of Toronto", country: "Canada", photo: "2.png" },
  { name: "Dilnoza Karimova", university: "Final International University", country: "North Cyprus", photo: "3.png" },
  { name: "Jasur Tashkentov", university: "Curtin Singapore", country: "Singapore", photo: "4.png" },
  { name: "Nigora Saidova", university: "University of Melbourne", country: "Australia", photo: "5.png" },
  { name: "Bekzod Rashidov", university: "Near East University", country: "North Cyprus", photo: "6.png" },
  { name: "Zarina Nazarova", university: "James Cook University", country: "Singapore", photo: "7.png" },
  { name: "Otabek Yoldashev", university: "INTI International University", country: "Malaysia", photo: "8.png" },
  { name: "Malika Islomova", university: "University of Sydney", country: "Australia", photo: "9.png" },
  { name: "Azizbek Tursunov", university: "Cyprus International University", country: "North Cyprus", photo: "10.png" },
  {name: "Gulnora Rakhmatova", university: "University of New South Wales", country: "Australia", photo: "11.png" },
  {name: "Shahnoza Abdurahmonova", university: "University of British Columbia", country: "Canada", photo: "12.png" },
  {name: "Rustam Karimov", university: "University of Queensland", country: "Australia", photo: "13.png" },
  {name: "Dilshodbek Yusupov", university: "University of Manchester", country: "United Kingdom", photo: "14.png" },
  {name: "Nilufar Tursunova", university: "University of Melbourne", country: "Australia", photo: "15.png" },
  {name: "Jasurbek Rakhmatov", university: "University of Toronto", country: "Canada", photo: "16.png" },
  {name: "Malika Karimova", university: "University of Sydney", country: "Australia", photo: "17.png" },
  {name: "Bekzod Yusupov", university: "University of Oxford", country: "United Kingdom", photo: "18.png" },

];

const resultsTrack = [...resultsData, ...resultsData];

function ResultCard({ r }: { r: (typeof resultsData)[number] }) {
  return (
    <div className="group relative w-56 shrink-0 overflow-hidden rounded-[20px] border border-[var(--border)] bg-white shadow-soft hover:shadow-[0_30px_60px_-25px_rgba(15,27,42,0.25)] transition-shadow duration-300">
      <div className="relative h-72 overflow-hidden">
        <img
          src={r.photo}
          alt={r.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)]" />
    </div>
  );
}

function Results({ onApply }: { onApply: () => void }) {
  const { t } = useTranslation();
  return (
    <section id="results" className="relative py-24 bg-[#0D1B2A] overflow-hidden">
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8 text-center mb-14">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="h-3.5 w-3.5" />
            {t("results.eyebrow")}
          </div>
          <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl text-white">{t("results.title")}</h2>
          <p className="mt-4 text-white/70 text-lg">{t("results.subtitle")}</p>
        </Reveal>
      </div>

      {/* Full-width scrolling track, outside the max-w container */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0D1B2A] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0D1B2A] to-transparent sm:w-40" />

        <style>{`
          @keyframes results-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .results-marquee-track {
            animation: results-marquee 30s linear infinite;
          }
          .results-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="overflow-hidden">
          <div className="results-marquee-track flex w-max gap-6">
            {resultsTrack.map((r, i) => (
              <ResultCard key={`${r.name}-${i}`} r={r} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-16 flex justify-center px-6">
        <button
          onClick={onApply}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 shadow-gold"
        >
          {t("results.cta")}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();
  const items = [
    { icon: Compass, t: t("services.items.consultation.title"), d: t("services.items.consultation.desc") },
    { icon: GraduationCap, t: t("services.items.university.title"), d: t("services.items.university.desc") },
    { icon: FileText, t: t("services.items.documents.title"), d: t("services.items.documents.desc") },
    { icon: Plane, t: t("services.items.visa.title"), d: t("services.items.visa.desc") },
    { icon: Award, t: t("services.items.scholarship.title"), d: t("services.items.scholarship.desc") },
    { icon: Home, t: t("services.items.housing.title"), d: t("services.items.housing.desc") },
  ];
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("services.eyebrow")} title={t("services.title")} sub={t("services.subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group h-full p-8 rounded-[20px] bg-white border border-[var(--border)] shadow-soft hover:border-gold hover:-translate-y-1 transition-all duration-300">
                <div className="h-14 w-14 rounded-2xl bg-gold/10 grid place-items-center text-[#A68B52] group-hover:bg-gold group-hover:text-[#0D1B2A] transition-colors">
                  <s.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-[#0D1B2A]">{s.t}</h3>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



const destinationData = [
  { img: cCY, n: "Cyprus", flag: "🇨🇾", tuition: "$25-45K", cities: "London, Manchester, Edinburgh", visa: 96, },
  { img: cSG, n: "Singapore", flag: "🇸🇬",  tuition: "$30-60K", cities: "New York, Boston, LA", visa: 92,  },
  { img: cCA, n: "Canada", flag: "🇨🇦",  tuition: "$20-36K", cities: "Toronto, Vancouver, Montreal", visa: 94,},
  { img: cAU, n: "Australia", flag: "🇦🇺", tuition: "$22-40K", cities: "Sydney, Melbourne, Brisbane", visa: 95,  },
  { img: cMY, n: "Malaysia", flag: "🇲🇾", tuition: "$15-25K", cities: "Kuala Lumpur, Penang", visa: 90,},
  { img: cDE, n: "Germany", flag: "🇩🇪", tuition: "$18-30K", cities: "Berlin, Munich, Hamburg", visa: 98,},
  { img: cLV, n: "Latvia", flag: "🇱🇻", tuition: "$12-20K", cities: "Riga", visa: 99,},
  { img: cIT, n: "Italy", flag: "🇮🇹", tuition: "$15-25K", cities: "Rome, Milan, Florence", visa: 90,},
];

function CountryCard({ d, i }: { d: (typeof destinationData)[number]; i: number }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Reveal delay={i * 70}>

        <a ref={ref}
        href={`#universities-${encodeURIComponent(d.n)}`}
        onMouseMove={onMove}
        className="group relative block rounded-[22px] overflow-hidden bg-white border border-[var(--border)] shadow-soft hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,27,42,0.25)] transition-all duration-300"
        onClick={() => {
          setTimeout(() => {
            document.getElementById("universities")?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ background: "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(200,169,113,0.18), transparent 60%)" }}
        />
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={d.img} alt={d.n} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1100ms] ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/70 via-[#0D1B2A]/10 to-transparent" />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-[#0D1B2A]">
            <span className="text-base leading-none">{d.flag}</span> {d.n}
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#10B981]/95 text-white text-[11px] font-bold">
            {d.visa}{t("destinations.visaBadge")}
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="font-display text-2xl font-bold">{d.n}</div>
            <div className="text-xs text-white/85 mt-0.5 line-clamp-1">{d.cities}</div>
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 gap-3 text-center">
          <div>
            <div className="font-display text-lg font-bold text-[#A68B52]">{d.visa}%</div>
            <div className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wide">{t("destinations.visaLabel")}</div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function Destinations() {
  const { t } = useTranslation();
  return (
    <section id="destinations" className="py-24 bg-[var(--soft)] relative overflow-hidden">
      <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-[#7DA7F5]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("destinations.eyebrow")} title={t("destinations.title")} sub={t("destinations.subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationData.map((d, i) => <CountryCard key={d.n} d={d} i={i} />)}
        </div>

      </div>
    </section>
  );
}

// ─── Transfer Section ────────────────────────────────────────────────────────

function TransferDestinationCard({ d, i }: { d: { flag: string; country: string; link: string }; i: number }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Reveal delay={i * 70}>
      <Link
        ref={ref}
        to={d.link}
        onMouseMove={onMove}
        className="group relative block overflow-hidden rounded-[22px] bg-gradient-to-br from-[#1a2f52] to-[#0D1B2A] border border-white/10 p-6 h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C8A971]/40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(200,169,113,0.18), transparent 60%)" }}
        />
        <div className="relative flex items-center justify-between">
          <span className="text-4xl leading-none drop-shadow-sm">{d.flag}</span>
          <span className="h-9 w-9 rounded-full bg-white/10 grid place-items-center text-white/60 group-hover:bg-[#C8A971] group-hover:text-[#0D1B2A] transition-all duration-300">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
        <h3 className="relative mt-5 font-display text-xl font-bold text-white">{d.country}</h3>
        <p className="relative mt-1 text-xs font-semibold tracking-wider uppercase text-white/45">{t("transfer.destinationCardSubtitle")}</p>
      </Link>
    </Reveal>
  );
}

function Transfer({ onApply }: { onApply: () => void }) {
  const { t } = useTranslation();
  const transferBenefits: string[] = t("transfer.benefits", { returnObjects: true }) as unknown as string[];
  const transferPrograms = [
    { icon: "💻", name: t("transfer.programs.computerScience"), key: "Computer Science" },
    { icon: "🏗️", name: t("transfer.programs.engineering"), key: "Engineering" },
    { icon: "💼", name: t("transfer.programs.business"), key: "Business" },
    { icon: "🧠", name: t("transfer.programs.psychology"), key: "Psychology" },
    { icon: "🩺", name: t("transfer.programs.health"), key: "Health & Applied Sciences" },
    { icon: "🧬", name: t("transfer.programs.biosciences"), key: "Biosciences" },
    { icon: "🎥", name: t("transfer.programs.massComm"), key: "Mass Communication" },
    { icon: "📊", name: t("transfer.programs.actuarial"), key: "Actuarial Science" },
  ];
  return (
    <section id="transfer" className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute top-[-5%] right-[-5%] h-96 w-96 rounded-full bg-[#C8A971]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] h-96 w-96 rounded-full bg-[#7DA7F5]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C8A971 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A971]/15 text-[#C8A971] text-xs font-semibold tracking-wider uppercase mb-5">
              <Plane className="h-3.5 w-3.5" />
              {t("transfer.badge")}
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
              {t("transfer.titleLine1")} <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-[#C8A971] to-[#E8C97A] bg-clip-text text-transparent">
                {t("transfer.titleHighlight")}
              </span>
            </h2>
            <p className="mt-5 text-white/65 text-lg leading-relaxed">
              {t("transfer.subtitle")}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-16 mx-auto max-w-2xl">
            <div className="relative rounded-[22px] overflow-hidden border border-[#C8A971]/30 bg-gradient-to-r from-[#C8A971]/10 to-[#C8A971]/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[#C8A971]/20 grid place-items-center shrink-0">
                  <Sparkles className="h-7 w-7 text-[#C8A971]" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#C8A971]">{t("transfer.offerLabel")}</div>
                  <div className="text-white font-display text-2xl font-bold mt-0.5">
                    <span className="line-through text-white/30 text-lg mr-2">$9,000</span>
                    $4,900
                    <span className="text-sm font-normal text-white/60 ml-1">{t("transfer.perYear")}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-1">
                <span className="px-4 py-1.5 rounded-full bg-[#10B981] text-white text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  {t("transfer.discountBadge")}
                </span>
                <span className="text-white/50 text-xs">{t("transfer.limitedSeats")}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1a3a6e] to-[#0D1B2A] p-8 border border-white/10">
              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <div className="text-xs font-bold tracking-[0.25em] text-white/50 uppercase">{t("transfer.year1Label")}</div>
                  <div className="text-2xl mt-1">{t("transfer.year1Country")}</div>
                  <div className="text-white/60 text-sm">{t("transfer.year1City")}</div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold shrink-0">
                  {t("transfer.documentBadge")}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{t("transfer.year1Title")}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t("transfer.year1Desc")}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex items-center justify-center gap-3 mb-8 text-white/40">
          <span className="h-px w-16 bg-white/15" />
          <ChevronDown className="h-5 w-5 text-[#C8A971]" />
          <span className="h-px w-16 bg-white/15" />
        </div>

        <Reveal delay={100}>
  <div className="text-center mb-10 max-w-2xl mx-auto">
    <div className="text-xs font-bold tracking-[0.25em] text-white/50 uppercase mb-3">
      {t("transfer.year3Label")}
    </div>

    <h3 className="font-display text-3xl lg:text-4xl font-bold text-white">
      {t("transfer.chooseCountryTitle")}
    </h3>

    <p className="mt-4 text-white/60 text-sm lg:text-base leading-relaxed">
      {t("transfer.chooseCountryDesc")}
    </p>
  </div>
</Reveal>

      {/* AMERICA CARD */}
      <Reveal delay={150}>
        <div className="flex justify-center mb-20">
          <div
            className="
              group relative w-full max-w-[520px]
              overflow-hidden rounded-[32px]
              border border-[#C8A971]/20
              bg-gradient-to-br
              from-[#17335F]
              via-[#12284A]
              to-[#0D1B2A]
              p-10
              shadow-[0_20px_70px_rgba(0,0,0,0.45)]
              transition-all duration-500
              hover:-translate-y-3
              hover:border-[#C8A971]/50
              hover:shadow-[0_25px_90px_rgba(200,169,113,0.25)]
            "
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-[#C8A971]/15 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#7DA7F5]/10 blur-3xl" />

            {/* Top */}
            <div className="flex items-start justify-between mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-3">
                  {t("transfer.americaCardLabel")}
                </p>

                <div className="text-6xl mb-4">🇺🇸</div>

                <h3 className="font-display text-4xl lg:text-5xl font-bold text-white">
                  {t("transfer.americaCardTitle")}
                </h3>

                <p className="mt-4 text-white/60 leading-relaxed max-w-sm">
                  {t("transfer.americaCardDesc")}
                </p>
              </div>

              <div
                className="
                  h-14 w-14 rounded-2xl
                  bg-white/10 backdrop-blur-md
                  flex items-center justify-center
                  text-white
                  group-hover:bg-[#C8A971]
                  group-hover:text-[#0D1B2A]
                  transition-all duration-300
                "
              >
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() =>
                (window.location.href = "/america/universities")
              }
              className="
                w-full rounded-2xl
                bg-white/5
                border border-white/10
                py-4
                text-white font-semibold
                transition-all duration-300
                hover:bg-[#C8A971]
                hover:text-[#0D1B2A]
                hover:border-[#C8A971]
              "
            >
              {t("transfer.americaCardButton")}
            </button>
          </div>
        </div>
      </Reveal>


        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          <Reveal>
            <div className="p-8 rounded-[24px] bg-white/[0.04] border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#C8A971]/20 grid place-items-center">
                  <Star className="h-5 w-5 text-[#C8A971]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{t("transfer.whyTitle")}</h3>
              </div>
              <ul className="space-y-3.5">
                {transferBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#10B981]/20 grid place-items-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#10B981]" strokeWidth={3} />
                    </div>
                    <span className="text-white/75 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="p-8 rounded-[24px] bg-white/[0.04] border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#C8A971]/20 grid place-items-center">
                  <GraduationCap className="h-5 w-5 text-[#C8A971]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{t("transfer.allMajorsTitle")}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {transferPrograms.map((p) => (
                  <button
                    key={p.name}
                    onClick={() =>
                      window.location.href =
                        `/america/universities?major=${encodeURIComponent(p.key)}`
                    }
                    className="flex items-center gap-3 px-4 py-3 rounded-[14px] bg-white/[0.06] border border-white/10 hover:border-[#C8A971]/40 hover:bg-white/10 transition-all w-full text-left"
                  >
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-white/80 text-sm font-medium">
                      {p.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

       <Reveal>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { v: 500, s: "+", l: t("transfer.statTop500") },
              { v: 54, s: "%", l: t("transfer.statDiscount") },
              { v: 4900, s: "$", l: t("transfer.statContract") },
            ].map((s, i) => (
              <div
                key={i}
                className="w-[220px] text-center p-5 rounded-[20px] bg-white/[0.04] border border-white/10"
              >
                <div className="font-display text-3xl font-bold text-[#C8A971]">
                  {s.s === "$" ? "$" : ""}
                  <CountUp end={s.v} />
                  {s.s !== "$" ? s.s : ""}
                </div>

                <div className="text-white/50 text-xs mt-1.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center">
            <button
              onClick={onApply}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] bg-gradient-to-r from-[#C8A971] to-[#A68B52] text-[#0D1B2A] font-semibold text-base hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 shadow-[0_15px_40px_-10px_rgba(200,169,113,0.5)]"
            >
              {t("transfer.applyButton")}
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-4 text-white/40 text-sm">{t("transfer.applyNote")}</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function PriceBanner({ onApply }: { onApply: () => void }) {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0D1B2A] via-[#13294a] to-[#0D1B2A] border border-[var(--gold)]/30 shadow-gold px-6 sm:px-12 py-12 sm:py-16 text-center">
            <div className="absolute top-[-20%] left-[-10%] h-72 w-72 rounded-full bg-[var(--gold)]/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] h-72 w-72 rounded-full bg-[#7DA7F5]/15 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)", backgroundSize: "30px 30px" }} />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-xs font-bold tracking-wider uppercase mb-7 animate-pulse">
                <Sparkles className="h-3.5 w-3.5" />
                {t("priceBanner.badge")}
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white leading-tight">
                {t("priceBanner.titleLine1")}
              </h2>

              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl sm:text-3xl font-semibold text-white/35 line-through">
                    10 000 000 {t("priceBanner.currency")}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#10B981] text-white text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                    {t("priceBanner.discountBadge")}
                  </span>
                </div>
                <div className="font-display text-5xl sm:text-7xl font-bold bg-gradient-to-r from-[var(--gold)] to-[#E8C97A] bg-clip-text text-transparent">
                  5 000 000 {t("priceBanner.currency")}
                </div>
                <span className="text-white/45 text-sm font-medium">{t("priceBanner.limitedOffer")}</span>
              </div>

              <p className="mt-7 max-w-2xl mx-auto text-white/65 text-base sm:text-lg leading-relaxed">
                {t("priceBanner.description")}
              </p>

              <button
                onClick={onApply}
                className="mt-9 inline-flex items-center gap-2 px-9 py-4 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-bold text-base sm:text-lg hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 shadow-[0_15px_45px_-8px_rgba(200,169,113,0.6)]"
              >
                {t("priceBanner.button")}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/**
 * Universitet narx string'ini (masalan "$3,000–5,500/yil (50% grant)") joriy
 * tilga moslab formatlaydi. Manba ma'lumotlar har doim o'zbek tilida saqlanadi,
 * shu funksiya runtime'da kerakli qismlarni almashtiradi.
 */
export function formatTuition(raw: string, t: (key: string) => string): string {
  if (raw === "Kontraktga qarab") return t("universities.contractBased");
  if (raw === "IELTS 6+ → 100% grant") return t("universities.ieltsGrantFull");
  return raw
    .replace("/yil", t("universities.perYear"))
    .replace("grant)", `${t("universities.grantSuffix")})`);
}

const universities = [
  { img: uFIU, n: "Final International University", c: "CYPRUS", flag: "CY", logo: "FIU", t: "$2,000–3,500/yil", country: "Cyprus", scholar: true },
  { img: uCSU, n: "Cyprus Science University", c: "North Cyprus", flag: "🇨🇾", logo: "CS", t: "$2,000–3,000/yil", country: "North Cyprus", scholar: true },
  { img: uKyr, n: "University of Kyrenia", c: "North Cyprus", flag: "🇨🇾", logo: "KY", t: "$2,500–3,500/yil", country: "North Cyprus", scholar: true },
  { img: uELU, n: "European Leadership University", c: "North Cyprus", flag: "🇨🇾", logo: "EL", t: "$2,000–3,000/yil", country: "North Cyprus", scholar: true },
  { img: uArk, n: "Arkin University of Creative Arts and Design", c: "North Cyprus", flag: "🇨🇾", logo: "AR", t: "$2,500–3,500/yil", country: "North Cyprus", scholar: true },
  { img: uCIU, n: "Cyprus International University", c: "North Cyprus", flag: "🇨🇾", logo: "CI", t: "$3,000–4,500/yil", country: "North Cyprus", scholar: true },
  { img: uGAU, n: "Girne American University", c: "North Cyprus", flag: "🇨🇾", logo: "GA", t: "$3,000–4,500/yil", country: "North Cyprus", scholar: true },
  { img: uNEU, n: "Near East University", c: "North Cyprus", flag: "🇨🇾", logo: "NE", t: "$3,000–5,000/yil", country: "North Cyprus", scholar: true },
  { img: uEMU, n: "Eastern Mediterranean University", c: "North Cyprus", flag: "🇨🇾", logo: "EM", t: "$3,500–6,000/yil", country: "North Cyprus", scholar: true },
  { img: uBAU, n: "Bahçeşehir Cyprus University", c: "North Cyprus", flag: "🇨🇾", logo: "BC", t: "$3,000–5,000/yil", country: "North Cyprus", scholar: true },

  // Singapore universitetlari — 50% grant bilan
  { img: uTGC, n: "Trent Global College", c: "Singapore", flag: "🇸🇬", logo: "TG", t: "$3,000–5,500/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uAMI, n: "Amity Global Institute", c: "Singapore", flag: "🇸🇬", logo: "AG", t: "$3,750–6,500/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uNIM, n: "Nanyang Institute of Management", c: "Singapore", flag: "🇸🇬", logo: "NI", t: "$3,250–6,000/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uEAIM, n: "East Asia Institute of Management", c: "Singapore", flag: "🇸🇬", logo: "EA", t: "$3,000–5,500/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uMDIS, n: "Management Development Institute of Singapore", c: "Singapore", flag: "🇸🇬", logo: "MD", t: "$4,500–7,500/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uPSB, n: "PSB Academy", c: "Singapore", flag: "🇸🇬", logo: "PS", t: "$4,500–8,000/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uKAP, n: "Kaplan Higher Education Academy", c: "Singapore", flag: "🇸🇬", logo: "KA", t: "$4,500–8,000/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uJCU, n: "James Cook University Singapore", c: "Singapore", flag: "🇸🇬", logo: "JC", t: "$7,500–13,000/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uSIM, n: "Singapore Institute of Management", c: "Singapore", flag: "🇸🇬", logo: "SI", t: "$7,000–12,500/yil (50% grant)", country: "Singapore", scholar: true },
  { img: uCUR, n: "Curtin Singapore", c: "Singapore", flag: "🇸🇬", logo: "CU", t: "$7,000–11,000/yil (50% grant)", country: "Singapore", scholar: true }, 

  // Malaysia universitetlari
  { img: uINTI, n: "INTI International University", c: "Malaysia", flag: "🇲🇾", logo: "IN", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uMAHSA, n: "MAHSA University", c: "Malaysia", flag: "🇲🇾", logo: "MH", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uCUM, n: "City University Malaysia", c: "Malaysia", flag: "🇲🇾", logo: "CM", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uAPU, n: "Asia Pacific University", c: "Malaysia", flag: "🇲🇾", logo: "AP", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uSEGI, n: "SEGi University", c: "Malaysia", flag: "🇲🇾", logo: "SG", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uUCSI, n: "UCSI University", c: "Malaysia", flag: "🇲🇾", logo: "UC", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uMSU, n: "Management and Science University", c: "Malaysia", flag: "🇲🇾", logo: "MS", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uCYB, n: "University of Cyberjaya", c: "Malaysia", flag: "🇲🇾", logo: "CJ", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uNILAI, n: "Nilai University", c: "Malaysia", flag: "🇲🇾", logo: "NL", t: "Kontraktga qarab", country: "Malaysia", scholar: true },
  { img: uLUC, n: "Lincoln University College", c: "Malaysia", flag: "🇲🇾", logo: "LC", t: "Kontraktga qarab", country: "Malaysia", scholar: true },

  // Australia universitetlari
  { img: uCDU, n: "Charles Darwin University", c: "Australia", flag: "🇦🇺", logo: "CD", t: "$8,000–13,000/yil", country: "Australia", scholar: true },
  { img: uUSQ, n: "University of Southern Queenslandx", c: "Australia", flag: "🇦🇺", logo: "SQ", t: "$9,000–14,000/yil", country: "Australia", scholar: true },
  { img: uFED, n: "Federation University Australia", c: "Australia", flag: "🇦🇺", logo: "FU", t: "$9,000–15,000/yil", country: "Australia", scholar: true },
  { img: uVU, n: "Victoria University", c: "Australia", flag: "🇦🇺", logo: "VU", t: "$10,000–16,000/yil", country: "Australia", scholar: true },
  { img: uCQU, n: "Central Queensland University", c: "Australia", flag: "🇦🇺", logo: "CQ", t: "$10,000–16,000/yil", country: "Australia", scholar: true },
  { img: uUC, n: "University of Canberra", c: "Australia", flag: "🇦🇺", logo: "UC", t: "$11,000–17,000/yil", country: "Australia", scholar: true },
  { img: uWSU, n: "Western Sydney University", c: "Australia", flag: "🇦🇺", logo: "WS", t: "$11,000–18,000/yil", country: "Australia", scholar: true },
  { img: uLTU, n: "La Trobe University", c: "Australia", flag: "🇦🇺", logo: "LT", t: "$12,000–18,000/yil", country: "Australia", scholar: true },
  { img: uDEA, n: "Deakin University", c: "Australia", flag: "🇦🇺", logo: "DU", t: "$12,000–20,000/yil", country: "Australia", scholar: true },
  { img: uGRI, n: "Griffith University", c: "Australia", flag: "🇦🇺", logo: "GU", t: "$12,000–20,000/yil", country: "Australia", scholar: true },

  // Germany universitetlari
  { img: uBSBI, n: "Berlin School of Business and Innovation", c: "Germany", flag: "🇩🇪", logo: "BS", t: "$3,000–7,000/yil", country: "Germany", scholar: true },
  { img: uIU, n: "IU International University of Applied Sciences", c: "Germany", flag: "🇩🇪", logo: "IU", t: "$4,000–8,000/yil", country: "Germany", scholar: true },
  { img: uGISMA, n: "GISMA Business School", c: "Germany", flag: "🇩🇪", logo: "GI", t: "$4,000–9,000/yil", country: "Germany", scholar: true },
  { img: uSRH, n: "SRH University", c: "Germany", flag: "🇩🇪", logo: "SR", t: "$5,000–10,000/yil", country: "Germany", scholar: true },
  { img: uARDEN, n: "Arden University Berlin", c: "Germany", flag: "🇩🇪", logo: "AR", t: "$5,000–10,000/yil", country: "Germany", scholar: true },
  { img: uUE, n: "University of Europe for Applied Sciences", c: "Germany", flag: "🇩🇪", logo: "UE", t: "$6,000–12,000/yil", country: "Germany", scholar: true },
  { img: uCBS, n: "CBS International Business School", c: "Germany", flag: "🇩🇪", logo: "CB", t: "$6,000–12,000/yil", country: "Germany", scholar: true },
  { img: uMAC, n: "Macromedia University of Applied Sciences", c: "Germany", flag: "🇩🇪", logo: "MC", t: "$7,000–13,000/yil", country: "Germany", scholar: true },
  { img: uFRE, n: "Fresenius University of Applied Sciences", c: "Germany", flag: "🇩🇪", logo: "FR", t: "$7,000–14,000/yil", country: "Germany", scholar: true },
  { img: uCON, n: "Constructor University", c: "Germany", flag: "🇩🇪", logo: "CU", t: "$8,000–15,000/yil", country: "Germany", scholar: true },

  // Canada universitetlari
  { img: uMUN, n: "Memorial University of Newfoundland", c: "Canada", flag: "🇨🇦", logo: "MN", t: "$3,000–6,000/yil", country: "Canada", scholar: true },
  { img: uUPEI, n: "University of Prince Edward Island", c: "Canada", flag: "🇨🇦", logo: "PE", t: "$4,000–8,000/yil", country: "Canada", scholar: true },
  { img: uBU, n: "Brandon University", c: "Canada", flag: "🇨🇦", logo: "BU", t: "$4,000–8,000/yil", country: "Canada", scholar: true },
  { img: uUCW, n: "University Canada West", c: "Canada", flag: "🇨🇦", logo: "UW", t: "$5,000–9,000/yil", country: "Canada", scholar: true },
  { img: uCBU, n: "Cape Breton University", c: "Canada", flag: "🇨🇦", logo: "CB", t: "$6,000–10,000/yil", country: "Canada", scholar: true },
  { img: uTRU, n: "Thompson Rivers University", c: "Canada", flag: "🇨🇦", logo: "TR", t: "$7,000–11,000/yil", country: "Canada", scholar: true },
  { img: uUNB, n: "University of New Brunswick", c: "Canada", flag: "🇨🇦", logo: "NB", t: "$7,000–12,000/yil", country: "Canada", scholar: true },
  { img: uYU, n: "Yorkville University", c: "Canada", flag: "🇨🇦", logo: "YU", t: "$8,000–12,000/yil", country: "Canada", scholar: true },
  { img: uMSVU, n: "Mount Saint Vincent University", c: "Canada", flag: "🇨🇦", logo: "MV", t: "$8,000–13,000/yil", country: "Canada", scholar: true },
  { img: uUOR, n: "University of Regina", c: "Canada", flag: "🇨🇦", logo: "UR", t: "$8,000–14,000/yil", country: "Canada", scholar: true },

  // Latvia universitetlari
  { img: uEKA, n: "EKA University of Applied Sciences", c: "Latvia", flag: "🇱🇻", logo: "EK", t: "€2,500–4,500/yil", country: "Latvia", scholar: true },
  { img: uTTI, n: "Transport and Telecommunication Institute", c: "Latvia", flag: "🇱🇻", logo: "TT", t: "€2,800–4,500/yil", country: "Latvia", scholar: true },
  { img: uTUR, n: "Turiba University", c: "Latvia", flag: "🇱🇻", logo: "TU", t: "€2,900–4,800/yil", country: "Latvia", scholar: true },
  { img: uRIS, n: "RISEBA University of Applied Sciences", c: "Latvia", flag: "🇱🇻", logo: "RI", t: "€3,000–5,500/yil", country: "Latvia", scholar: true },
  { img: uBIA, n: "Baltic International Academy", c: "Latvia", flag: "🇱🇻", logo: "BA", t: "€2,500–4,000/yil", country: "Latvia", scholar: true },
  { img: uISM, n: "Information Systems Management Institute", c: "Latvia", flag: "🇱🇻", logo: "IS", t: "€2,800–4,500/yil", country: "Latvia", scholar: true },
  { img: uUEC, n: "University of Economics and Culture", c: "Latvia", flag: "🇱🇻", logo: "EC", t: "€2,500–4,500/yil", country: "Latvia", scholar: true },
  { img: uVEN, n: "Ventspils University of Applied Sciences", c: "Latvia", flag: "🇱🇻", logo: "VU", t: "€2,800–4,200/yil", country: "Latvia", scholar: true },
  { img: uDAU, n: "Daugavpils University", c: "Latvia", flag: "🇱🇻", logo: "DU", t: "€2,200–4,000/yil", country: "Latvia", scholar: true },
  { img: uRTA, n: "Rezekne Academy of Technologies", c: "Latvia", flag: "🇱🇻", logo: "RT", t: "€2,200–4,000/yil", country: "Latvia", scholar: true },

  // Italy universitetlari — IELTS 6+ bo'lsa 100% grant
  { img: uPISA, n: "University of Pisa", c: "Italy", flag: "🇮🇹", logo: "PI", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uSIENA, n: "University of Siena", c: "Italy", flag: "🇮🇹", logo: "SI", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uFLO, n: "University of Florence", c: "Italy", flag: "🇮🇹", logo: "FL", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uBOL, n: "University of Bologna", c: "Italy", flag: "🇮🇹", logo: "BO", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uPAD, n: "University of Padua", c: "Italy", flag: "🇮🇹", logo: "PA", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uPAV, n: "University of Pavia", c: "Italy", flag: "🇮🇹", logo: "PV", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uMIL, n: "University of Milan", c: "Italy", flag: "🇮🇹", logo: "MI", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uTRE, n: "University of Trento", c: "Italy", flag: "🇮🇹", logo: "TR", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uPAL, n: "University of Palermo", c: "Italy", flag: "🇮🇹", logo: "PM", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
  { img: uCAM, n: "University of Camerino", c: "Italy", flag: "🇮🇹", logo: "CA", t: "IELTS 6+ → 100% grant", country: "Italy", scholar: true },
];

/**
 * Global universitetlar ro'yxati davlat bo'yicha guruhlangan holda.
 * ApplicationForm shu ro'yxatni standart (default) qiymat sifatida ishlatadi,
 * agar maxsus universityGroups prop berilmasa (masalan davlat sahifalaridan).
 */
const universitiesByCountry: Record<string, string[]> = universities.reduce<Record<string, string[]>>((acc, u) => {
  (acc[u.country] ||= []).push(u.n);
  return acc;
}, {});

// ─── University Select Dropdown ─────────────────────────────────────────────

function UniversitySelectDropdown({
  value,
  onChange,
  groupedOptions,
}: {
  value: string;
  onChange: (v: string) => void;
  groupedOptions: Record<string, string[]>;
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-[12px] border bg-[var(--soft)] text-sm text-left transition-all duration-200 ${
          open
            ? "border-[var(--gold)] ring-2 ring-[var(--gold)]/40"
            : "border-[var(--border)] hover:border-[var(--gold)]/50"
        }`}
      >
        <span className={value ? "text-[#0D1B2A] font-medium truncate" : "text-[#0D1B2A]/40"}>
          {value || t("universities.selectPlaceholder")}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#0D1B2A]/40 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-[var(--gold)]" : ""
          }`}
        />
      </button>

      <div
        className={`absolute z-30 mt-2 w-full origin-top rounded-[16px] border border-[var(--border)] bg-white shadow-[0_25px_60px_-15px_rgba(15,27,42,0.25)] overflow-hidden transition-all duration-200 ${
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="px-4 py-2.5 border-b border-[var(--border)] bg-[var(--soft)]">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#A68B52]">
            {t("universities.selectDropdownHeader")}
          </span>
        </div>

        <div className="max-h-72 overflow-y-auto custom-scroll">
          {Object.entries(groupedOptions).map(([country, list]) => (
            <div key={country}>
              <div className="sticky top-0 px-4 py-2 text-xs font-bold text-[#0D1B2A] bg-[var(--gold)]/10 border-y border-[var(--gold)]/15">
                {country}
              </div>
              {list.map((name) => {
                const isActive = value === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      onChange(name);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2.5 text-sm transition-colors duration-150 flex items-center justify-between gap-2 ${
                      isActive
                        ? "bg-[var(--gold)]/15 text-[#0D1B2A] font-semibold"
                        : "text-[#0D1B2A]/80 hover:bg-[var(--gold)]/8 hover:text-[#0D1B2A]"
                    }`}
                  >
                    <span className="truncate">{name}</span>
                    {isActive && <Check className="h-3.5 w-3.5 text-[#A68B52] shrink-0" />}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Universities({ onApply }: { onApply: (universityName: string) => void }) {
  const { t } = useTranslation();
  const tabValues = [
    "Barchasi",
    "Cyprus",
    "Singapore",
    "Malaysia",
    "Australia",
    "Canada",
    "Germany",
    "Latvia",
    "Italy",
  ];
  const tabLabel = (v: string) => (v === "Barchasi" ? t("universities.tabAll") : v);

  const [active, setActive] = useState("Barchasi");
  const [saved, setSaved] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#universities-")) {
        const country = decodeURIComponent(hash.replace("#universities-", ""));
        setActive(country);
        setTimeout(() => {
          document.getElementById("universities")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filtered =
    active === "Barchasi"
      ? universities
      : active === "Cyprus"
      ? universities.filter(
          (u) =>
            u.country === "Cyprus" ||
            u.country === "North Cyprus"
        )
      : universities.filter(
          (u) => u.country === active
        );

  const toggle = (
    arr: string[],
    set: (v: string[]) => void,
    name: string,
    max?: number
  ) => {
    if (arr.includes(name)) {
      set(arr.filter((x) => x !== name));
      return;
    }

  };
  return (
    <section id="universities" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("universities.eyebrow")} title={t("universities.title")} sub={t("universities.subtitle")} />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabValues.map(tv => (
            <button
              key={tv}
              onClick={() => setActive(tv)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.04] ${
                active === tv
                  ? "bg-[#0D1B2A] text-white shadow-soft"
                  : "bg-[var(--soft)] text-[var(--muted-foreground)] hover:bg-gold/10 hover:text-[#0D1B2A]"
              }`}
            >{tabLabel(tv)}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((u, i) => {
            const isSaved = saved.includes(u.n);
            const isComp = compare.includes(u.n);
            return (
              <Reveal key={u.n} delay={i * 50}>
                <div className="group rounded-[22px] overflow-hidden bg-white border border-[var(--border)] shadow-soft hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(15,27,42,0.25)] transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={u.img} alt={u.n} loading="lazy" width={1024} height={640} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {u.scholar && (
                        <span className="px-2.5 py-1 rounded-full bg-[#10B981]/95 text-white text-xs font-bold">{t("universities.scholarshipBadge")}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#0D1B2A] to-[#1F3A5F] grid place-items-center text-white font-display font-bold text-sm shrink-0">{u.logo}</div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold tracking-wider uppercase text-[#A68B52] flex items-center gap-1.5">
                          <span>{u.flag}</span>{u.c}
                        </div>
                        <h3 className="font-display text-lg font-semibold text-[#0D1B2A] truncate">{u.n}</h3>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <div>
                        <div className="text-[var(--muted-foreground)] text-xs">{t("universities.tuitionLabel")}</div>
                        <div className="font-semibold text-[#0D1B2A]">{formatTuition(u.t, t)}</div>
                      </div>
                      <button
                        onClick={() => toggle(compare, setCompare, u.n, 3)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          isComp ? "bg-[#0D1B2A] text-white" : "bg-[var(--soft)] text-[#0D1B2A] hover:bg-gold/15"
                        }`}
                      >
                      </button>
                    </div>
                    <button
                      onClick={() => onApply(u.n)}
                      className="mt-5 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-[12px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-gold"
                    >
                      {t("universities.applyButton")} <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        {compare.length > 0 && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 px-5 py-3 rounded-2xl bg-[#0D1B2A] text-white shadow-2xl flex items-center gap-3 animate-fade-up">
            <GitCompare className="h-4 w-4 text-[var(--gold)]" />
            <span className="text-sm font-semibold">{compare.length} {t("universities.comparingText")}</span>
            <button onClick={() => setCompare([])} className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20">{t("universities.clearButton")}</button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Upload Field Component ──────────────────────────────────────────────────

function UploadField({
  label, accept, value, onChange, uploaded,
}: {
  label: string; accept: string; value: File | null;
  onChange: (f: File | null) => void; uploaded: boolean;
}) {
  const { t } = useTranslation();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#0D1B2A]">{label}</label>
      <div
        onClick={() => ref.current?.click()}
        className={`relative flex items-center gap-3 px-4 py-3.5 rounded-[14px] border-2 border-dashed cursor-pointer transition-all duration-200 ${
          uploaded
            ? "border-[#10B981] bg-[#10B981]/8"
            : "border-[#0D1B2A]/20 bg-[var(--soft)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/5"
        }`}
      >
        <div className={`h-9 w-9 rounded-xl grid place-items-center shrink-0 ${uploaded ? "bg-[#10B981]" : "bg-[#0D1B2A]/8"}`}>
          {uploaded
            ? <Check className="h-4 w-4 text-white" />
            : <FileText className="h-4 w-4 text-[#0D1B2A]/50" />}
        </div>
        <div className="min-w-0 flex-1">
          {uploaded && value
            ? <p className="text-sm font-medium text-[#0D1B2A] truncate">{value.name}</p>
            : <p className="text-sm text-[#0D1B2A]/50">{t("uploadField.clickToUpload")}</p>}
          <p className="text-xs text-[#0D1B2A]/40 mt-0.5">{accept.toUpperCase()} • {t("uploadField.maxSize")}</p>
        </div>
        {uploaded && (
          <button
            onClick={(e) => { e.stopPropagation(); onChange(null); if (ref.current) ref.current.value = ""; }}
            className="h-7 w-7 grid place-items-center rounded-full bg-[#EF4444]/15 text-[#EF4444] hover:bg-[#EF4444]/25 transition-colors shrink-0"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
        <input ref={ref} type="file" accept={accept} className="hidden" onChange={e => onChange(e.target.files?.[0] ?? null)} />
      </div>
    </div>
  );
}



// ─── Application Form Component ─────────────────────────────────────────────

export interface ApplicationFormProps {
  /** Oldindan tanlangan universitet nomi. Bo'sh string bo'lsa, foydalanuvchi o'zi tanlaydi. */
  university: string;
  onClose: () => void;
  /**
   * Universitetlar ro'yxatini davlat bo'yicha guruhlab beradi (masalan
   * { "Angliya universitetlari": ["University of Hertfordshire", ...] }).
   * Bu prop davlat sahifalaridan (UK/USA/Canada/Australia) chaqirilganda
   * faqat o'sha davlat universitetlarini dropdown'da ko'rsatish uchun beriladi.
   * Berilmasa, asosiy sahifadagi barcha universitetlar (davlat bo'yicha
   * guruhlangan) standart sifatida ishlatiladi.
   */
  universityGroups?: Record<string, string[]>;
}

export function ApplicationForm({ university, onClose, universityGroups }: ApplicationFormProps) {
  const { t } = useTranslation();
  const isPreselected = university.trim().length > 0;
  const [universityName, setUniversityName] = useState(university);
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState("");
  const [gradeLevel, setGradeLevel] = useState<"9" | "11">("11");
  const [certType, setCertType] = useState<"IELTS" | "CEFR" | "Certificate yoq">("IELTS");
  const [certScore, setCertScore] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [idCard, setIdCard] = useState<File | null>(null);
  const [zagran, setZagran] = useState<File | null>(null);
  const [parentPassport, setParentPassport] = useState<File | null>(null);
  const [certificate, setCertificate] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [langCert, setLangCert] = useState<File | null>(null);

  // Davlat sahifasidan kelgan guruh bo'lsa o'shani, bo'lmasa global ro'yxatni ishlatamiz
  const dropdownGroups = universityGroups ?? universitiesByCountry;

  const docs = certType === "Certificate yoq"
    ? [idCard, zagran, parentPassport, certificate, photo]
    : [idCard, zagran, parentPassport, certificate, photo, langCert];

  const uploadedCount = docs.filter(Boolean).length;
  const progress = Math.round((uploadedCount / docs.length) * 100);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!universityName.trim()) {
      toast.error(t("applicationForm.toastFillUniversity"));
      return;
    }
    if (!fullName || !dob || !phone || !email || !faculty) {
      toast.error(t("applicationForm.toastFillAll"));
      return;
    }
    if (uploadedCount < docs.length) {
      toast.error(t("applicationForm.toastUploadAll"));
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("phone", phone);
      formData.append("university", universityName);
      formData.append("faculty", faculty);
      formData.append("dob", dob);
      formData.append("email", email);
      formData.append("grade_level", gradeLevel);
      formData.append("cert_type", certType);
      formData.append("cert_score", certScore);

      const fileList = [
        { file: idCard, label: t("applicationForm.fileLabels.idCard") },
        { file: zagran, label: t("applicationForm.fileLabels.zagran") },
        { file: parentPassport, label: t("applicationForm.fileLabels.parentPassport") },
        { file: certificate, label: t("applicationForm.fileLabels.certificate") },
        { file: photo, label: t("applicationForm.fileLabels.photo") },
        { file: langCert, label: t("applicationForm.fileLabels.langCert") },
      ];
      fileList.forEach(({ file, label }) => {
        if (file) formData.append("files", file, `${label} - ${file.name}`);
      });

      const res = await fetch(`${import.meta.env.VITE_API_URL ?? "http://localhost:8000"}/api/applications/`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Ariza xato:", err);
        toast.error(err.detail || t("applicationForm.toastSubmitError"));
        return;
      }

      setSubmitted(true);
      toast.success(t("applicationForm.toastSubmitSuccess"));
    } catch (err) {
      console.error("Backend xato:", err);
      toast.error(t("applicationForm.toastSubmitError"));
    }
  };

  if (submitted) {
    return (
      <section id="application" className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <div className="h-24 w-24 mx-auto rounded-full bg-[#10B981]/15 grid place-items-center mb-6">
            <Check className="h-12 w-12 text-[#10B981]" />
          </div>
          <h2 className="font-display text-4xl font-bold text-[#0D1B2A]">{t("applicationForm.successTitle")}</h2>
          <p className="mt-4 text-lg text-[#0D1B2A]/65 leading-relaxed">
            <span className="font-semibold text-[#A68B52]">{universityName}</span> {t("applicationForm.successDesc")}
          </p>
          <button
            onClick={() => { setSubmitted(false); onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold shadow-gold hover:scale-[1.03] transition-all"
          >
            {t("applicationForm.backHome")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="flex items-start justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 mb-3">
              <GraduationCap className="h-3.5 w-3.5 text-[#A68B52]" />
              <span className="text-xs font-semibold tracking-wider text-[#A68B52] uppercase">{t("applicationForm.badge")}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0D1B2A]">{isPreselected ? university : t("applicationForm.defaultTitle")}</h2>
            <p className="mt-2 text-[#0D1B2A]/60">{t("applicationForm.subtitle")}</p>
          </div>
          <button onClick={onClose} className="h-10 w-10 grid place-items-center rounded-full bg-[#0D1B2A]/8 text-[#0D1B2A] hover:bg-[#0D1B2A]/15 transition-colors shrink-0 mt-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-8 p-4 rounded-[18px] bg-white border border-[var(--border)] shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.docsProgress")}</span>
            <span className="text-sm font-bold text-[#A68B52]">{uploadedCount}/{docs.length}</span>
          </div>
          <div className="h-2.5 bg-[var(--soft)] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-[#0D1B2A]/45 mt-1.5">{progress}% {t("applicationForm.percentFilled")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* --- 1. Shaxsiy ma'lumotlar --- */}
          <div className="p-6 rounded-[22px] bg-white border border-[var(--border)] shadow-soft space-y-5">
            <h3 className="font-display text-lg font-semibold text-[#0D1B2A] flex items-center gap-2">
              <span className="h-7 w-7 rounded-lg bg-[var(--gold)]/20 grid place-items-center text-xs font-bold text-[#A68B52]">1</span>
              {t("applicationForm.section1Title")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.fullName")}</label>
                <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder={t("applicationForm.fullNamePlaceholder")}
                  className="px-4 py-3 rounded-[12px] border border-[var(--border)] bg-[var(--soft)] text-sm text-[#0D1B2A] placeholder:text-[#0D1B2A]/35 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.dob")}</label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)}
                  className="px-4 py-3 rounded-[12px] border border-[var(--border)] bg-[var(--soft)] text-sm text-[#0D1B2A] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.phone")}</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder={t("applicationForm.phonePlaceholder")}
                  className="px-4 py-3 rounded-[12px] border border-[var(--border)] bg-[var(--soft)] text-sm text-[#0D1B2A] placeholder:text-[#0D1B2A]/35 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.email")}</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t("applicationForm.emailPlaceholder")}
                  className="px-4 py-3 rounded-[12px] border border-[var(--border)] bg-[var(--soft)] text-sm text-[#0D1B2A] placeholder:text-[#0D1B2A]/35 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all" />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.selectedUniversity")}</label>
                {isPreselected ? (
                  <div className="px-4 py-3 rounded-[12px] border border-[var(--gold)]/40 bg-[var(--gold)]/8 text-sm font-semibold text-[#0D1B2A] flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[#A68B52] shrink-0" />
                    {universityName}
                    <span className="ml-auto text-xs text-[#A68B52] font-medium">{t("applicationForm.autoSelected")}</span>
                  </div>
                ) : (
                  <UniversitySelectDropdown
                    value={universityName}
                    onChange={setUniversityName}
                    groupedOptions={dropdownGroups}
                  />
                )}
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.faculty")}</label>
                <input type="text" value={faculty} onChange={e => setFaculty(e.target.value)} placeholder={t("applicationForm.facultyPlaceholder")}
                  className="px-4 py-3 rounded-[12px] border border-[var(--border)] bg-[var(--soft)] text-sm text-[#0D1B2A] placeholder:text-[#0D1B2A]/35 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all" />
              </div>
            </div>
          </div>

          {/* --- 2. Kerakli hujjatlar --- */}
          <div className="p-6 rounded-[22px] bg-white border border-[var(--border)] shadow-soft space-y-5">
            <h3 className="font-display text-lg font-semibold text-[#0D1B2A] flex items-center gap-2">
              <span className="h-7 w-7 rounded-lg bg-[var(--gold)]/20 grid place-items-center text-xs font-bold text-[#A68B52]">2</span>
              {t("applicationForm.section2Title")}
            </h3>

            <UploadField label={t("applicationForm.idCard")} accept=".jpg,.jpeg,.png,.pdf" value={idCard} onChange={setIdCard} uploaded={!!idCard} />
            <UploadField label={t("applicationForm.zagran")} accept=".jpg,.jpeg,.png,.pdf" value={zagran} onChange={setZagran} uploaded={!!zagran} />
            <UploadField label={t("applicationForm.parentPassport")} accept=".jpg,.jpeg,.png,.pdf" value={parentPassport} onChange={setParentPassport} uploaded={!!parentPassport} />

            {/* Shahodatnoma */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.certificateLabel")}</label>
              <div className="flex gap-2 mb-2">
                {(["9", "11"] as const).map(g => (
                  <button key={g} type="button" onClick={() => setGradeLevel(g)}
                    className={`flex-1 py-2 rounded-[10px] text-sm font-semibold transition-all ${
                      gradeLevel === g ? "bg-[#0D1B2A] text-white" : "bg-[var(--soft)] text-[#0D1B2A]/60 hover:bg-[var(--gold)]/10 hover:text-[#0D1B2A]"
                    }`}
                  >{g}{t("applicationForm.gradeSuffix")}</button>
                ))}
              </div>
              <UploadField label={`${gradeLevel}${t("applicationForm.certificateFile")}`} accept=".jpg,.jpeg,.png,.pdf" value={certificate} onChange={setCertificate} uploaded={!!certificate} />
            </div>

            <UploadField label={t("applicationForm.photo")} accept=".jpg,.jpeg,.png" value={photo} onChange={setPhoto} uploaded={!!photo} />

            {/* Til sertifikati */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#0D1B2A]">{t("applicationForm.langCertLabel")}</label>
              <div className="flex gap-2 mb-2">
                {(["IELTS", "CEFR", "Certificate yoq"] as const).map(ct => (
                  <button key={ct} type="button" onClick={() => setCertType(ct)}
                    className={`flex-1 py-2 rounded-[10px] text-sm font-semibold transition-all ${
                      certType === ct ? "bg-[#0D1B2A] text-white" : "bg-[var(--soft)] text-[#0D1B2A]/60 hover:bg-[var(--gold)]/10 hover:text-[#0D1B2A]"
                    }`}
                  >{ct === "Certificate yoq" ? t("applicationForm.langCertNo") : ct}</button>
                ))}
              </div>

              {certType !== "Certificate yoq" && (
                <>
                  <input type="text" value={certScore} onChange={e => setCertScore(e.target.value)}
                    placeholder={certType === "IELTS" ? t("applicationForm.scorePlaceholderIelts") : t("applicationForm.scorePlaceholderCefr")}
                    className="px-4 py-3 rounded-[12px] border border-[var(--border)] bg-[var(--soft)] text-sm text-[#0D1B2A] placeholder:text-[#0D1B2A]/35 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40 focus:border-[var(--gold)] transition-all mb-2" />
                  <UploadField label={`${certType} ${t("applicationForm.langCertFile")}`} accept=".jpg,.jpeg,.png,.pdf" value={langCert} onChange={setLangCert} uploaded={!!langCert} />
                </>
              )}
            </div>
          </div>

          <button type="submit"
            className="w-full py-4 rounded-[16px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold text-base shadow-gold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            {t("applicationForm.submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useTranslation();
  const benefits = [
    { t: t("whyUs.items.certified.title"), d: t("whyUs.items.certified.desc") },
    { t: t("whyUs.items.transparent.title"), d: t("whyUs.items.transparent.desc") },
    { t: t("whyUs.items.individual.title"), d: t("whyUs.items.individual.desc") },
    { t: t("whyUs.items.support.title"), d: t("whyUs.items.support.desc") },
  ];
  return (
    <section className="py-24 bg-[var(--soft)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-[#A68B52] text-xs font-semibold tracking-wider uppercase">{t("whyUs.eyebrow")}</div>
            <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl text-[#0D1B2A]">{t("whyUs.title")}</h2>
            <p className="mt-5 text-[var(--muted-foreground)] text-lg leading-relaxed">{t("whyUs.subtitle")}</p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-6 rounded-[20px] bg-white shadow-soft">
                <div className="font-display text-4xl font-bold text-[#0D1B2A]"><CountUp end={95} suffix="%" /></div>
                <div className="mt-2 text-sm text-[var(--muted-foreground)]">{t("whyUs.acceptanceRate")}</div>
              </div>
              <div className="p-6 rounded-[20px] bg-[#0D1B2A] text-white">
                <div className="font-display text-4xl font-bold text-gold"><CountUp end={2} suffix="M+" /></div>
                <div className="mt-2 text-sm text-white/70">{t("whyUs.scholarshipWon")}</div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="p-6 rounded-[20px] bg-white border border-[var(--border)] shadow-soft h-full hover:border-gold transition-colors">
                <div className="h-10 w-10 rounded-xl bg-gold/15 text-[#A68B52] grid place-items-center">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[#0D1B2A]">{b.t}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useTranslation();
  const steps = [
    { n: "01", t: t("process.steps.step1.title"), d: t("process.steps.step1.desc") },
    { n: "02", t: t("process.steps.step2.title"), d: t("process.steps.step2.desc") },
    { n: "03", t: t("process.steps.step3.title"), d: t("process.steps.step3.desc") },
    { n: "04", t: t("process.steps.step4.title"), d: t("process.steps.step4.desc") },
    { n: "05", t: t("process.steps.step5.title"), d: t("process.steps.step5.desc") },
  ];
  return (
    <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wider uppercase">{t("process.eyebrow")}</div>
            <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl text-white">{t("process.title")}</h2>
            <p className="mt-4 text-white/70 text-lg">{t("process.subtitle")}</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="p-6 rounded-[20px] bg-white/[0.04] border border-white/10 backdrop-blur h-full hover:border-gold/50 transition-colors">
                <div className="font-display text-4xl font-bold text-gold/80">{s.n}</div>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">{s.t}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useTranslation();
  const items = [
    { img: ts1, n: "Nigora Karimova", u: "University of Manchester", flag: "🇬🇧", q: t("testimonials.items.t1.quote") },
    { img: ts2, n: "Jasur Rahmonov", u: "University of Toronto", flag: "🇨🇦", q: t("testimonials.items.t2.quote") },
    { img: ts3, n: "Madina Yusupova", u: "University of Melbourne", flag: "🇦🇺", q: t("testimonials.items.t3.quote") },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} sub={t("testimonials.subtitle")} />
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[var(--soft)] to-[#EEF2FF] border border-[var(--border)] shadow-soft">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {items.map((it, i) => (
              <div key={i} className="min-w-full p-10 md:p-14 grid md:grid-cols-[auto_1fr] gap-8 items-center">
                <div className="relative shrink-0">
                  <img src={it.img} alt={it.n} width={160} height={160} loading="lazy" className="h-32 w-32 md:h-40 md:w-40 rounded-2xl object-cover shadow-soft" />
                  <span className="absolute -bottom-2 -right-2 h-10 w-10 rounded-xl bg-white grid place-items-center shadow text-2xl">{it.flag}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#C8A971]">
                    {[0,1,2,3,4].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-lg md:text-xl text-[#1F2937] leading-relaxed font-display italic">"{it.q}"</p>
                  <div className="mt-6">
                    <div className="font-semibold text-[#0D1B2A] text-lg">{it.n}</div>
                    <div className="text-sm text-[var(--muted-foreground)]">{it.u}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button aria-label={t("testimonials.prev")} onClick={() => setIdx((idx - 1 + items.length) % items.length)} className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white shadow-soft grid place-items-center text-[#0D1B2A] hover:bg-gold hover:text-[#0D1B2A] transition-all hover:scale-110"><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label={t("testimonials.next")} onClick={() => setIdx((idx + 1) % items.length)} className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white shadow-soft grid place-items-center text-[#0D1B2A] hover:bg-gold hover:text-[#0D1B2A] transition-all hover:scale-110"><ChevronRight className="h-5 w-5" /></button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, i) => (
              <button key={i} aria-label={`Slide ${i+1}`} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[#0D1B2A]" : "w-2 bg-[#0D1B2A]/25"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  const { t } = useTranslation();
  // Calculator
  const [calcCountry, setCalcCountry] = useState("UK");
  const [tuition, setTuition] = useState(30000);
  const [living, setLiving] = useState(12000);
  const total = tuition + living;

  // Scholarship checker
  const [gpa, setGpa] = useState(3.5);
  const [ielts, setIelts] = useState(6.5);
  const [budget, setBudget] = useState(20000);
  const recs = useMemo(() => {
    const r: { n: string; c: string; m: string }[] = [];
    if (gpa >= 3.7 && ielts >= 7) r.push({ n: t("tools.scholarship.names.chevening"), c: "🇬🇧", m: t("tools.scholarship.match.full") });
    if (gpa >= 3.5 && ielts >= 6.5) r.push({ n: t("tools.scholarship.names.ausAwards"), c: "🇦🇺", m: t("tools.scholarship.match.full") });
    if (gpa >= 3.3 && ielts >= 6.0) r.push({ n: t("tools.scholarship.names.ireland"), c: "🇮🇪", m: t("tools.scholarship.match.partial") });
    if (budget <= 25000 && ielts >= 6) r.push({ n: t("tools.scholarship.names.daad"), c: "🇩🇪", m: t("tools.scholarship.match.free") });
    if (gpa >= 3.8) r.push({ n: t("tools.scholarship.names.fulbright"), c: "🇺🇸", m: t("tools.scholarship.match.full") });
    return r.slice(0, 4);
  }, [gpa, ielts, budget, t]);

  return (
    <section className="py-24 bg-[var(--soft)] relative overflow-hidden">
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#A78BFA]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("tools.eyebrow")} title={t("tools.title")} sub={t("tools.subtitle")} />
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="p-8 rounded-[24px] bg-white shadow-soft border border-[var(--border)] h-full">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-hover)] grid place-items-center text-[#0D1B2A]">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0D1B2A]">{t("tools.calc.title")}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{t("tools.calc.subtitle")}</p>
                </div>
              </div>
              <div className="mt-7 space-y-5">
                <div>
                  <label className="text-sm font-medium text-[#0D1B2A]">{t("tools.calc.country")}</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["UK", "USA", "Canada", "Australia"].map((c) => (
                      <button key={c} onClick={() => setCalcCountry(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${calcCountry === c ? "bg-[#0D1B2A] text-white" : "bg-[var(--soft)] text-[#0D1B2A] hover:bg-gold/15"}`}>{c}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm"><label className="font-medium text-[#0D1B2A]">{t("tools.calc.tuition")}</label><span className="font-semibold text-[#A68B52]">${tuition.toLocaleString()}</span></div>
                  <input type="range" min={10000} max={70000} step={1000} value={tuition} onChange={(e) => setTuition(+e.target.value)} className="mt-2 w-full accent-[#C8A971]" />
                </div>
                <div>
                  <div className="flex justify-between text-sm"><label className="font-medium text-[#0D1B2A]">{t("tools.calc.living")}</label><span className="font-semibold text-[#A68B52]">${living.toLocaleString()}</span></div>
                  <input type="range" min={5000} max={30000} step={500} value={living} onChange={(e) => setLiving(+e.target.value)} className="mt-2 w-full accent-[#C8A971]" />
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0D1B2A] to-[#1F3A5F] text-white">
                  <div className="text-xs tracking-wider uppercase text-white/60">{t("tools.calc.estimateLabel")} {calcCountry}</div>
                  <div className="mt-1 font-display text-4xl font-bold text-[var(--gold)]">${total.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="p-8 rounded-[24px] bg-white shadow-soft border border-[var(--border)] h-full">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] grid place-items-center text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0D1B2A]">{t("tools.scholarship.title")}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{t("tools.scholarship.subtitle")}</p>
                </div>
              </div>
              <div className="mt-7 grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#0D1B2A]/70 uppercase tracking-wider">{t("tools.scholarship.gpa")}</label>
                  <input type="number" min={2} max={4} step={0.1} value={gpa} onChange={(e) => setGpa(+e.target.value)} className="mt-1.5 w-full h-11 px-3 rounded-xl border border-[var(--border)] focus:border-[var(--gold)] focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#0D1B2A]/70 uppercase tracking-wider">{t("tools.scholarship.ielts")}</label>
                  <input type="number" min={4} max={9} step={0.5} value={ielts} onChange={(e) => setIelts(+e.target.value)} className="mt-1.5 w-full h-11 px-3 rounded-xl border border-[var(--border)] focus:border-[var(--gold)] focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#0D1B2A]/70 uppercase tracking-wider">{t("tools.scholarship.budget")}</label>
                  <input type="number" min={5000} max={80000} step={1000} value={budget} onChange={(e) => setBudget(+e.target.value)} className="mt-1.5 w-full h-11 px-3 rounded-xl border border-[var(--border)] focus:border-[var(--gold)] focus:outline-none" />
                </div>
              </div>
              <div className="mt-6 space-y-2.5">
                {recs.length === 0 && (
                  <div className="p-4 rounded-xl bg-[var(--soft)] text-sm text-[var(--muted-foreground)]">{t("tools.scholarship.emptyState")}</div>
                )}
                {recs.map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#10B981]/10 to-transparent border border-[#10B981]/20 hover:border-[#10B981]/50 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{r.c}</span>
                      <div>
                        <div className="font-semibold text-[#0D1B2A]">{r.n}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{r.m}</div>
                      </div>
                    </div>
                    <Check className="h-5 w-5 text-[#10B981]" strokeWidth={2.5} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6">
          <Quiz />
        </div>
      </div>
    </section>
  );
}

function Quiz() {
  const { t } = useTranslation();
  const questions = [
    { k: "country", q: t("quiz.questions.country.q"), opts: t("quiz.questions.country.opts", { returnObjects: true }) as unknown as string[] },
    { k: "budget", q: t("quiz.questions.budget.q"), opts: t("quiz.questions.budget.opts", { returnObjects: true }) as unknown as string[] },
    { k: "degree", q: t("quiz.questions.degree.q"), opts: t("quiz.questions.degree.opts", { returnObjects: true }) as unknown as string[] },
    { k: "ielts", q: t("quiz.questions.ielts.q"), opts: t("quiz.questions.ielts.opts", { returnObjects: true }) as unknown as string[] },
  ];
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, string>>({});
  const done = step >= questions.length;
  const recommend = () => {
    const map: Record<string, { u: string; m: string }> = {
      UK: { u: t("quiz.recommendations.UK.u"), m: t("quiz.recommendations.UK.m") },
      USA: { u: t("quiz.recommendations.USA.u"), m: t("quiz.recommendations.USA.m") },
      Canada: { u: t("quiz.recommendations.Canada.u"), m: t("quiz.recommendations.Canada.m") },
      Australia: { u: t("quiz.recommendations.Australia.u"), m: t("quiz.recommendations.Australia.m") },
    };
    return map[ans.country] || map.UK;
  };
  return (
    <Reveal>
      <div className="p-8 lg:p-10 rounded-[24px] bg-gradient-to-br from-[#0D1B2A] to-[#1F3A5F] text-white shadow-[0_30px_60px_-20px_rgba(15,27,42,0.4)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-2xl bg-[var(--gold)] grid place-items-center text-[#0D1B2A]"><Sparkles className="h-6 w-6" /></div>
          <div>
            <h3 className="font-display text-xl font-semibold">{t("quiz.title")}</h3>
            <p className="text-sm text-white/65">{t("quiz.subtitle")}</p>
          </div>
        </div>
        {/* Progress */}
        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] transition-all duration-500" style={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }} />
        </div>
        <div className="mt-2 text-xs text-white/55">{Math.min(step + (done ? 0 : 1), questions.length)} / {questions.length}</div>

        {!done ? (
          <div className="mt-7">
            <div className="font-display text-2xl font-semibold mb-5">{questions[step].q}</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {questions[step].opts.map((o) => (
                <button
                  key={o}
                  onClick={() => { setAns({ ...ans, [questions[step].k]: o }); setStep(step + 1); }}
                  className="px-5 py-4 rounded-xl bg-white/8 border border-white/10 text-left font-medium hover:border-[var(--gold)] hover:bg-white/12 hover:translate-x-1 transition-all"
                >{o}</button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-5 text-sm text-white/60 hover:text-[var(--gold)] inline-flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" /> {t("quiz.back")}
              </button>
            )}
          </div>
        ) : (
          <div className="mt-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-bold mb-4">
              <Check className="h-3.5 w-3.5" /> {t("quiz.resultReady")}
            </div>
            <div className="font-display text-3xl font-bold">{recommend().u}</div>
            <p className="mt-2 text-white/70">{recommend().m}. {t("quiz.resultDesc")}</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#contact" className="px-6 py-3 rounded-[12px] bg-[var(--gold)] text-[#0D1B2A] font-semibold hover:scale-[1.04] transition-all shadow-gold inline-flex items-center gap-2">{t("quiz.ctaConsultation")} <ArrowRight className="h-4 w-4" /></a>
              <button onClick={() => { setStep(0); setAns({}); }} className="px-6 py-3 rounded-[12px] bg-white/10 border border-white/15 hover:bg-white/15 transition-all">{t("quiz.retry")}</button>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}

function FloatingActions() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* Bottom-right stack */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end">
        <a
          href="https://wa.me/+998888831199"
          target="_blank" rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute inset-0 rounded-full bg-[#25D366]/50 animate-ping" />
        </a>
        <a
          href="https://t.me/kabulovaar"
          target="_blank" rel="noopener noreferrer"
          aria-label="Telegram"
          className="h-14 w-14 grid place-items-center rounded-full bg-[#0088CC] text-white shadow-[0_15px_40px_-10px_rgba(0,136,204,0.5)] hover:scale-110 transition-transform"
        >
          <Send className="h-6 w-6" />
        </a>
        {show && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("floatingActions.scrollTop")}
            className="h-12 w-12 grid place-items-center rounded-full bg-[#0D1B2A] text-white shadow-soft hover:scale-110 transition-transform animate-fade-up"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
      <a
        href="#contact"
        className={`fixed bottom-5 left-5 z-40 hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold shadow-gold hover:scale-[1.05] transition-all ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <CalendarDays className="h-4 w-4" /> {t("floatingActions.bookConsultation")}
      </a>
    </>
  );
}

function Team() {
  const { t } = useTranslation();
  const members = [
    { img: t1, n: "Dilnoza Saidova", r: t("team.members.m1.role"), b: t("team.members.m1.bio") },
    { img: t2, n: "Sherzod Aliyev", r: t("team.members.m2.role"), b: t("team.members.m2.bio") },
    { img: t3, n: "Kamola Yo'ldosheva", r: t("team.members.m3.role"), b: t("team.members.m3.bio") },
    { img: t4, n: "Botir Toshmatov", r: t("team.members.m4.role"), b: t("team.members.m4.bio") },
  ];
  return (
    <section id="team" className="py-24 bg-[var(--soft)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("team.eyebrow")} title={t("team.title")} sub={t("team.subtitle")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="group rounded-[20px] overflow-hidden bg-white shadow-soft hover:-translate-y-1 transition-all">
                <div className="aspect-square overflow-hidden">
                  <img src={m.img} alt={m.n} loading="lazy" width={768} height={768} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-[#0D1B2A]">{m.n}</h3>
                  <div className="text-xs text-gold font-semibold tracking-wider uppercase mt-1">{m.r}</div>
                  <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">{m.b}</p>
                  <div className="mt-4 flex gap-2">
                    <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-[var(--soft)] grid place-items-center text-[var(--muted-foreground)] hover:bg-gold hover:text-[#0D1B2A] transition-colors"><Linkedin className="h-4 w-4" /></a>
                    <a href="#" aria-label="Telegram" className="h-9 w-9 rounded-full bg-[var(--soft)] grid place-items-center text-[var(--muted-foreground)] hover:bg-gold hover:text-[#0D1B2A] transition-colors"><Send className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const { t } = useTranslation();
  return (
    <section id="map" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("partners.eyebrow")}
          title={t("partners.title")}
          sub={t("partners.subtitle")}
        />
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Reveal>
            <div>
              <div
                className="overflow-hidden rounded-[20px] border border-[var(--border)] shadow-soft"
                style={{ height: 360 }}
              >
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=69.269882%2C41.299480&mode=whatshere&whatshere%5Bpoint%5D=69.269882%2C41.299479&whatshere%5Bzoom%5D=16&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen={true}
                />
              </div>

                <a href="https://yandex.uz/maps/10335/tashkent/house/afrosiyob_ko_chasi_12_1/YkAYdAFpQU0FQFprfX54eHhkbQ==/?ll=69.269882%2C41.299480&z=16"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-gold"
              >
                <MapPin className="h-4 w-4" />
                {t("partners.viewOnMap")}
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 p-5 rounded-[18px] bg-[var(--soft)] border border-[var(--border)] flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-[#A68B52] grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0D1B2A]">{t("partners.address")}</div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-1">{t("partners.addressValue")}</div>
                </div>
              </div>
              <div className="p-5 rounded-[18px] bg-[var(--soft)] border border-[var(--border)] flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-[#A68B52] grid place-items-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0D1B2A]">{t("contact.workingHours")}</div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-1">{t("contact.workingHoursValue")}</div>
                </div>
              </div>
              <div className="p-5 rounded-[18px] bg-[var(--soft)] border border-[var(--border)] flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-[#A68B52] grid place-items-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0D1B2A]">{t("partners.phone")}</div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-1">+998 88 8831199</div>
                </div>
              </div>
              <div className="p-5 rounded-[18px] bg-[var(--soft)] border border-[var(--border)] flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-[#A68B52] grid place-items-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#0D1B2A]">{t("partners.email")}</div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-1">
                    <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=eduvisaconsult@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rgba(200,169,113,0.07)/70 hover:text-[#C8A971] transition-colors"
                  >
                    eduvisaconsult@gmail.com
                  </a>
                    </div>
                </div>
              </div>
              <div
                className="col-span-2 p-5 rounded-[18px] border flex items-start gap-4"
                style={{ background: "rgba(200,169,113,0.07)", borderColor: "rgba(200,169,113,0.3)" }}
              >
                <div
                  className="h-11 w-11 rounded-xl grid place-items-center shrink-0 text-[#A68B52]"
                  style={{ background: "rgba(200,169,113,0.2)" }}
                >
                  <Send className="h-5 w-5" />
                </div>
                <a href="https://t.me/kabulovaar" target="_blank" rel="noopener noreferrer">
                  <div className="font-semibold text-[#A68B52]">{t("partners.telegram")}</div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-1">{t("partners.telegramDesc")}</div>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useTranslation();
  const items = [
    { q: t("faq.items.q1.q"), a: t("faq.items.q1.a") },
    { q: t("faq.items.q2.q"), a: t("faq.items.q2.a") },
    { q: t("faq.items.q3.q"), a: t("faq.items.q3.a") },
    { q: t("faq.items.q4.q"), a: t("faq.items.q4.a") },
    { q: t("faq.items.q5.q"), a: t("faq.items.q5.a") },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-[var(--soft)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left p-6 rounded-[20px] bg-white border transition-all ${
                    isOpen ? "border-gold shadow-soft" : "border-[var(--border)] hover:border-gold/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-lg font-semibold text-[#0D1B2A]">{it.q}</span>
                    <ChevronDown className={`h-5 w-5 text-[#A68B52] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-[var(--muted-foreground)] leading-relaxed">{it.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();
  const countries = [
    { f: "🇬🇧", n: t("contact.countries.uk") },
    { f: "🇺🇸", n: t("contact.countries.usa") },
    { f: "🇨🇦", n: t("contact.countries.canada") },
    { f: "🇦🇺", n: t("contact.countries.australia") },
    { f: "🇳🇿", n: t("contact.countries.newZealand") },
    { f: "🇮🇪", n: t("contact.countries.ireland") },
  ];
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", country: "", date: "", message: "" });
  const next = () => {
    if (step === 0) {
      if (form.name.trim().length < 2) return toast.error(t("contact.toastNameRequired"));
      if (form.phone.trim().length < 7) return toast.error(t("contact.toastPhoneRequired"));
    }
    if (step === 1 && !form.country) return toast.error(t("contact.toastCountryRequired"));
    setStep(step + 1);
  };
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.date) return toast.error(t("contact.toastDateRequired"));
    setLoading(true);
    try {
      // 1. Create a Lead first
      const leadResponse = await fetch(`${import.meta.env.VITE_API_URL ?? "http://localhost:8000"}/api/leads/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          country_of_interest: form.country,
          message: form.message,
          source: "website",
        }),
      });

      if (!leadResponse.ok) {
        const errorData = await leadResponse.json().catch(() => ({}));
        throw new Error(errorData.detail || errorData.message || t("contact.toastLeadError"));
      }

      const leadData = await leadResponse.json();

      // 2. Create a Booking linked to the Lead
      const bookingResponse = await fetch(`${import.meta.env.VITE_API_URL ?? "http://localhost:8000"}/api/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lead_id: leadData.id,
          service: t("contact.defaultService"),
          date: form.date,
          time_slot: "10:00:00", // Default time slot
          notes: form.message || t("contact.defaultNotes"),
        }),
      });

      if (!bookingResponse.ok) {
        console.warn("Booking creation failed, but Lead was saved:", await bookingResponse.text());
      }

      setDone(true);
      toast.success(t("contact.toastSuccess"));
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || t("contact.toastGenericError"));
    } finally {
      setLoading(false);
    }
  }
  const reset = () => { setDone(false); setStep(0); setForm({ name: "", phone: "", country: "", date: "", message: "" }); };
  const today = new Date().toISOString().slice(0, 10);
  return (
    <section id="contact" className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wider uppercase">{t("contact.eyebrow")}</div>
            <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl">{t("contact.title")}</h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">{t("contact.subtitle")}</p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-gold grid place-items-center shrink-0"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="text-white font-semibold">
                    <a href="https://yandex.uz/maps/10335/tashkent/house/afrosiyob_ko_chasi_12_1/YkAYdAFpQU0FQFprfX54eHhkbQ==/?ll=69.269882%2C41.299480&z=16"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{t("contact.address")}</a>
                  </div>
                  <div className="text-white/60 text-sm mt-1">{t("contact.addressValue")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-gold grid place-items-center shrink-0"><Phone className="h-5 w-5" /></div>
                <div><div className="text-white font-semibold">{t("contact.phone")}</div><div className="text-white/60 text-sm mt-1">{t("contact.phoneValue")}</div></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-gold grid place-items-center shrink-0"><Mail className="h-5 w-5" /></div>
                <div><div className="text-white font-semibold">{t("contact.email")}</div><div className="text-white/60 text-sm mt-1">eduvisaconsult@gmail.com </div></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/15 text-gold grid place-items-center shrink-0"><Clock className="h-5 w-5" /></div>
                <div><div className="text-white font-semibold">{t("contact.workingHours")}</div><div className="text-white/60 text-sm mt-1">{t("contact.workingHoursValue")}</div></div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              {[Instagram, Send].map((I, i) => (
                <a key={i} href="https://www.instagram.com/edu.visa.consulting/" aria-label="social" className="h-11 w-11 rounded-xl bg-white/8 grid place-items-center text-white/80 hover:bg-gold hover:text-[#0D1B2A] transition-colors"><I className="h-5 w-5" /></a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <form onSubmit={submit} className="p-8 lg:p-10 rounded-[24px] bg-white/[0.05] backdrop-blur-xl border border-white/10">
            {done ? (
              <div className="text-center py-10 animate-fade-up">
                <div className="mx-auto h-20 w-20 rounded-full bg-[#10B981] grid place-items-center shadow-[0_15px_40px_-10px_rgba(16,185,129,0.6)] animate-bounce">
                  <Check className="h-10 w-10 text-white" strokeWidth={3} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{t("contact.thankYou")} {form.name}!</h3>
                <p className="mt-2 text-white/70">{t("contact.successDesc1")} {form.date} {t("contact.successDesc2")}</p>
                <button type="button" onClick={reset} className="mt-6 px-5 py-2.5 rounded-full bg-white/10 text-white text-sm hover:bg-white/15 transition-colors">{t("contact.newRequest")}</button>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {[0, 1, 2].map((s) => (
                    <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)]" : "bg-white/10"}`} />
                  ))}
                </div>
                <div className="text-xs text-white/60 mb-5">{step + 1} / 3 {t("contact.stepIndicator")}</div>

                {step === 0 && (
                  <div className="space-y-5 animate-fade-up">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">{t("contact.step1NameLabel")}</label>
                      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} maxLength={80} className="w-full h-12 px-4 rounded-[14px] bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--gold)] focus:outline-none transition-colors" placeholder={t("contact.step1NamePlaceholder")} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">{t("contact.step1PhoneLabel")}</label>
                      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} maxLength={30} className="w-full h-12 px-4 rounded-[14px] bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--gold)] focus:outline-none transition-colors" placeholder={t("contact.step1PhonePlaceholder")} />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5 animate-fade-up">
                    <label className="block text-sm font-medium text-white/80">{t("contact.step2CountryLabel")}</label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {countries.map((c) => (
                        <button
                          key={c.n} type="button"
                          onClick={() => setForm({ ...form, country: c.n })}
                          className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all text-left ${
                            form.country === c.n
                              ? "bg-[var(--gold)]/15 border-[var(--gold)] text-white"
                              : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          <span className="text-xl">{c.f}</span>
                          <span className="text-sm font-medium">{c.n}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5 animate-fade-up">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">{t("contact.step3DateLabel")}</label>
                      <input type="date" min={today} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full h-12 px-4 rounded-[14px] bg-white/5 border border-white/10 text-white focus:border-[var(--gold)] focus:outline-none transition-colors [color-scheme:dark]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">{t("contact.step3MessageLabel")}</label>
                      <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={3} className="w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[var(--gold)] focus:outline-none transition-colors resize-none" placeholder={t("contact.step3MessagePlaceholder")} />
                    </div>
                  </div>
                )}

                <div className="mt-7 flex gap-3">
                  {step > 0 && (
                    <button type="button" onClick={() => setStep(step - 1)} className="px-5 py-3.5 rounded-[14px] bg-white/8 border border-white/15 text-white font-semibold hover:bg-white/12 transition-all inline-flex items-center gap-2">
                      <ChevronLeft className="h-4 w-4" /> {t("contact.backButton")}
                    </button>
                  )}
                  {step < 2 ? (
                    <button type="button" onClick={next} className="flex-1 py-3.5 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-gold inline-flex items-center justify-center gap-2">
                      {t("contact.continueButton")} <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button type="submit" disabled={loading} className="flex-1 py-3.5 rounded-[14px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] text-[#0D1B2A] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-gold inline-flex items-center justify-center gap-2 disabled:opacity-60">
                      {loading ? (
                        <><span className="h-4 w-4 rounded-full border-2 border-[#0D1B2A]/30 border-t-[#0D1B2A] animate-spin" /> {t("contact.submitting")}</>
                      ) : (<>{t("contact.submitButton")} <ArrowRight className="h-4 w-4" /></>)}
                    </button>
                  )}
                </div>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer () {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0A1421] text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/eduvisa.png" alt="Eduvisa logo" className="h-18 w-auto object-contain"/>
            <div>
              <div className="font-display text-lg font-bold text-white">Eduvisa</div>
              <div className="text-[10px] tracking-[0.2em] text-gold font-semibold">{t("nav.tagline")}</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">{t("footer.tagline")}</p>
        </div>
        <div>
          <div className="font-display text-white font-semibold mb-5">{t("footer.quickLinks")}</div>
          <ul className="space-y-3 text-sm">
            {useNavLinks().map(l => <li key={l.href}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="font-display text-white font-semibold mb-5">{t("footer.contact")}</div>
          <ul className="space-y-3 text-sm">
            <li>{t("footer.address")}</li>
            <li>{t("footer.phone")}</li>
            <li>{t("footer.email")}</li>
            <li>{t("footer.hours")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Eduvisa · {t("nav.tagline")}. {t("footer.rightsReserved")}
        </div>
      </div>
    </footer>
  );
}

function Index() {
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);

  const handleApply = (universityName: string) => {
    setSelectedUniversity(universityName);
    setTimeout(() => {
      const el = document.getElementById("application");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleClose = () => {
    setSelectedUniversity(null);
    const el = document.getElementById("universities");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Results onApply={() => handleApply("")} />
        <Services />
        <Destinations />
        <Transfer onApply={() => handleApply("")} />
        <PriceBanner onApply={() => handleApply("")} />
        <Universities onApply={handleApply} />
        {selectedUniversity !== null && (
          <ApplicationForm key={selectedUniversity} university={selectedUniversity} onClose={handleClose} />
        )}
        <WhyUs />
        <Process />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}