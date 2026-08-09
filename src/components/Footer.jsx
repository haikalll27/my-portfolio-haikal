import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-[5%] lg:px-[10%]">
      <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6" />
      <span className="block pb-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Muhamad Haikal Apriansyah. {t("footer.rights")}
      </span>
    </footer>
  );
};

export default Footer;
