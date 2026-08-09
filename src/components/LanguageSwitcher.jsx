import React from "react";
import { useLanguage } from "../context/LanguageContext";

const OPTIONS = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
];

const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur-sm ${className}`}
    >
      {OPTIONS.map(({ code, label }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-sm shadow-purple-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
