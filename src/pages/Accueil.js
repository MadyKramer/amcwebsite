import Intro from "../components/accueil/Intro";
import ServicesHome from "../components/ServicesHome";
import Overview from "../components/accueil/Overview";
import Recruitment from "../components/accueil/Recruitment";
import { HashLink as Link } from 'react-router-hash-link';

const Accueil = () => {

  return (
    <main>
      <Intro />
      <ServicesHome />
      <div className="btnContainer">
        <Link className="btn" to="/Services#description">
          En savoir plus
        </Link>
      </div>
      <Overview />
      <Recruitment />
    </main>
  );
};

export default Accueil;
