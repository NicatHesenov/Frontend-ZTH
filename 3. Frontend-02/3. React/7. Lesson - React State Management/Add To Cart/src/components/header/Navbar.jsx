import { SlBasket } from "react-icons/sl";
import "./navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <span className="basket">
          <SlBasket className="basket-icon" />
        </span>
        <div className="text-contianer">
          <h1 className="nav-title">Məhsul Mağazası</h1>
          <p className="nav-text">React State Management Dərsi</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
