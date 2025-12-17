import { Routes, Route } from "react-router-dom";
import { useSettings } from "../../context/useSetting";
import "../MainLayout/mainLayout.css";
import Navbar from "../Navbar/Navbar";
import Home from "../../page/Home";
import About from "../../page/About";
function MainLayout() {
  const { theme } = useSettings();
  // Bu hissəyə baxacam
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <div className="app-container">
        <Navbar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
