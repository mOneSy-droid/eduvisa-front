import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "./locales/uz.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";

export const SUPPORTED_LANGUAGES = ["uz", "ru", "en"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  uz: "O'zbek",
  ru: "Русский",
  en: "English",
};

export const LANGUAGE_FLAGS: Record<SupportedLanguage, string> = {
  uz: "🇺🇿",
  ru: "🇷🇺",
  en: "ᴇɴ",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
      en: { translation: en },
    },
    fallbackLng: "uz",
    supportedLngs: SUPPORTED_LANGUAGES,
    detection: {
      // Tilni aniqlash tartibi: avval localStorage'da saqlangan tanlovni tekshiradi,
      // keyin brauzer tiliga qaraydi, oxirida HTML tag'ga yozadi.
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "eduvisa_lang",
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;
