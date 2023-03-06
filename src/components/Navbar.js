import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo/logo3.png";
import hamburgerMenu from "../assets/icons/more-M.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src={logo} alt=""></img>
        </NavLink>
      </div>
      <nav className={`navbar__container ${isMenuOpen ? "navbar__container--open menuAppear" : ""}`}>
        <ul className="navbar__container__list">
          <li >
            <NavLink to="/" className={"navlinks"} onClick={() => setIsMenuOpen(false)}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/Apropos" className={"navlinks"} onClick={() => setIsMenuOpen(false)}>
              Qui sommes nous?
            </NavLink>
          </li>
          <li >
            <NavLink to="/Services" className={"navlinks"} onClick={() => setIsMenuOpen(false)}>
              Services
            </NavLink>
          </li>
          <li >
            <NavLink to="/Contact" className={"navlinks"} onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar__hamburgerMenu">
        <img src={hamburgerMenu} alt="Ouvrir le Menu de navigation" onClick={toggleMenu}></img>
      </div>
    </header>
  );
};

export default Navbar;
