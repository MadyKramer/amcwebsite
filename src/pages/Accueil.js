import Banner from "../components/Banner";
import ServicesCards from "../components/ServicesCards";
import logo from "../assets/logo/logo3.png";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
  const navigate = useNavigate();
  const handleServices = () => {
    navigate('/Services');
  }
  return (
    <>
      <Banner />
      <section className="intro">
        <img
          src={logo}
          alt="logo de l'association"
          className="intro__logo"
        ></img>
        <p className="intro__quote">
          AMC oeuvre au quotidien au bien-être des personnes âgées et/ou
          handicapées, afin de faire en sorte que chaque individu puisse
          continuer d'écrire son histoire dans la sérénité.
        </p>
      </section>
      <section className="servicesSection">
        <h2 className="sectionTitle">Nos Services</h2>
        <ServicesCards />
        <div className="btnContainer">
          <button onClick={handleServices} className="btn">En savoir plus</button>
        </div>
      </section>
    </>
  );
};

export default Accueil;
