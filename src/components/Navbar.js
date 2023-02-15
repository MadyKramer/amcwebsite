import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section class="navbar">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/Apropos">Qui sommes nous?</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
