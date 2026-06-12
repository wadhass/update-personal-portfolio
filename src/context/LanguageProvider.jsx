import React, { createContext, useState, useContext, useMemo } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const available = Object.keys(translations);
  const [language, setLanguage] = useState("English");

  const t = (path) => {
    const parts = path.split(".");
    let node = translations[language] || translations["English"];
    for (const p of parts) {
      if (!node) return path;
      node = node[p];
    }
    return node || path;
  };

  const value = useMemo(() => ({ language, setLanguage, available, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
