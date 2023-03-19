import logo from "../../assets/logo/logo3.png";
import Banner from "../accueil/Banner";

const Intro = () => {
  return (
    <>
      <Banner />
      <section className="intro">
        <img
          src={logo}
          alt="logo de l'association"
          className="intro__logo"
        ></img>
        <p className="intro__quote" tabIndex="0">
          AMC oeuvre au quotidien au <strong>bien-être des personnes âgées et/ou
          handicapées</strong>, afin de faire en sorte que chaque individu puisse
          continuer d'écrire son histoire dans la sérénité.
        </p>
      </section>
    </>
  );
};

export default Intro;
