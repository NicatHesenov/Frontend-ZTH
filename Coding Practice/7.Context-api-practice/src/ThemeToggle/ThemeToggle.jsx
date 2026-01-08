import { useSetting } from "../TaskContext/useSetting";
import "./themeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useSetting();
  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <div className="container">
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
      </div>
    </div>
  );
}

export default ThemeToggle;
