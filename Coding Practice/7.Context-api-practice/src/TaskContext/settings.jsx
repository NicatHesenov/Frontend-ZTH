import { useState } from "react";
import { SetingsContext } from "./settingsContext";

const SetingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <SetingsContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SetingsContext.Provider>
  );
};

export default SetingsProvider;
