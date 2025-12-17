import { useState } from "react";
import { SettingsContext } from "./SettingsContext";
const translations = {
  az: { home: "Ana Səhifə", about: "Haqqımızda", title: "Salam, Dünya!" },
  en: { home: "Home", about: "About Us", title: "Hello!. World" },
};

function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("az");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeLanguage = (langValue) => {
    setLang(langValue);
  };

  return (
    <SettingsContext.Provider
      value={{
        toggleTheme,
        changeLanguage,
        theme,
        lang,
        words: translations[lang],
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
