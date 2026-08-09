import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "en";
const SUPPORTED = ["en", "id"];

const LanguageContext = createContext(null);

const readStoredLang = () => {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
  } catch {
    // Private mode / disabled storage — fall back rather than crash on boot.
    return DEFAULT_LANG;
  }
};

// Dot-key lookup so the dictionary can stay nested and readable while callers
// write t("home.greeting").
const resolve = (dict, key) =>
  key.split(".").reduce((acc, part) => (acc == null ? undefined : acc[part]), dict);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Preference just won't persist; the UI still switches.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    const meta = translations[lang]?.meta;
    if (meta?.title) document.title = meta.title;
    if (meta?.description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", meta.description);
    }
  }, [lang]);

  // Chained fallback lang -> en -> key, so a half-filled dictionary renders
  // English instead of blanks. `vars` fills {placeholder} tokens.
  const t = useCallback(
    (key, vars) => {
      const hit = resolve(translations[lang], key);
      const fallback = typeof hit === "string" ? hit : resolve(translations[DEFAULT_LANG], key);
      if (typeof fallback !== "string") return key;
      if (!vars) return fallback;
      return fallback.replace(/\{(\w+)\}/g, (match, name) =>
        Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
      );
    },
    [lang]
  );

  const tList = useCallback(
    (key) => {
      const hit = resolve(translations[lang], key);
      if (Array.isArray(hit)) return hit;
      const fallback = resolve(translations[DEFAULT_LANG], key);
      return Array.isArray(fallback) ? fallback : [];
    },
    [lang]
  );

  const value = useMemo(() => ({ t, tList, lang, setLang }), [t, tList, lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
