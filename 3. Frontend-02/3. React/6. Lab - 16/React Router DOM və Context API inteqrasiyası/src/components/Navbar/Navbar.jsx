import { Link } from "react-router-dom";
import { useSettings } from "../../context/useSetting";
import "./navbar.css";
function Navbar() {
  const { words, changeLanguage, lang, toggleTheme, theme } = useSettings();
  console.log(words);

  return (
    <nav>
      <div className="linkContainer">
        <Link className="link" to="/">
          {words?.home}{" "}
        </Link>
        <Link className="link" to="/about">
          {words?.about}
        </Link>
      </div>
      <div>
        <select onChange={(e) => changeLanguage(e.target.value)} value={lang}>
          <option value="az">Az</option>
          <option value="en">En</option>
        </select>

        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark-mode" : "☀️ Light-mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
