import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { SUPPORTED_LANGUAGES, LANGUAGE_LABELS, LANGUAGE_FLAGS, type SupportedLanguage } from "@/i18n/config";

/**
 * Desktop navbar uchun til almashtirgich — kichik dropdown ko'rinishida.
 */
export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = (i18n.language?.split("-")[0] as SupportedLanguage) || "uz";

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleSelect = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Til tanlash"
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
          open ? "bg-[#0D1B2A]/8 text-[#0D1B2A]" : "text-[#0D1B2A]/70 hover:bg-[#0D1B2A]/8 hover:text-[#0D1B2A]"
        }`}
      >
        <span className="text-base leading-none">{LANGUAGE_FLAGS[current]}</span>
        <span className="uppercase">{current}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute right-0 z-30 mt-2 w-40 origin-top-right rounded-[14px] border border-[var(--border)] bg-white shadow-[0_25px_60px_-15px_rgba(15,27,42,0.25)] overflow-hidden transition-all duration-200 ${
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
      >
        {SUPPORTED_LANGUAGES.map((lng) => (
          <button
            key={lng}
            type="button"
            onClick={() => handleSelect(lng)}
            className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
              current === lng
                ? "bg-[var(--gold)]/15 text-[#0D1B2A] font-semibold"
                : "text-[#0D1B2A]/80 hover:bg-[var(--gold)]/8 hover:text-[#0D1B2A]"
            }`}
          >
            <span className="text-base leading-none">{LANGUAGE_FLAGS[lng]}</span>
            {LANGUAGE_LABELS[lng]}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Mobil menyu uchun til almashtirgich — uchta tugma yonma-yon ko'rinishida.
 */
export function LanguageSwitcherMobile() {
  const { i18n } = useTranslation();
  const current = (i18n.language?.split("-")[0] as SupportedLanguage) || "uz";

  return (
    <div className="flex items-center gap-2">
      {SUPPORTED_LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            current === lng ? "bg-[#0D1B2A] text-white" : "bg-[#0D1B2A]/8 text-[#0D1B2A]/70 hover:bg-[#0D1B2A]/15"
          }`}
        >
          <span className="text-base leading-none">{LANGUAGE_FLAGS[lng]}</span>
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
