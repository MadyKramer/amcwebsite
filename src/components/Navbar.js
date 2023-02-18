import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo3.png";
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt=""></img>
      </div>
      <nav className="navbar__container">
        <ul className="navbar__container__list">
          <li>
            <NavLink to="/" className={"navlinks"}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/Apropos" className={"navlinks"}>Qui sommes nous?</NavLink>
          </li>
          <li>
            <NavLink to="/Services" className={"navlinks"}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={"navlinks"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
