import Banner from "../components/Banner";
import logo from "../assets/logo/logo2.jpg";

const Accueil = () => {
  return (
    <>
      <Banner />
      <section className="intro">
        <img src={logo} alt="logo de l'association" className="intro__logo"></img>
        <p className="intro__quote">AMC oeuvre au quotidien au bien-être des personnes âgées et/ou handicapées, afin de faire en sorte que chaque individu puisse continuer d'écrire son histoire dans la sérénité.</p>
      </section>
      <section className="servicesSection">
        <h2 className="sectionTitle">Nos Services</h2>
      </section>
    </>
  );
};

export default Accueil;
