import "./Header.css";
import { LuClipboardList } from "react-icons/lu";
function Header() {
  return (
    <div className="header__container">
      <div className="logo">
        <LuClipboardList />
      </div>
      <div className="title__container">
        <h1 className="title">Task Flow</h1>
        <p className="text">Manage your daily goals</p>
      </div>
    </div>
  );
}

export default Header;
