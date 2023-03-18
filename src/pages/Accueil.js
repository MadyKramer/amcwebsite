import Intro from "../components/accueil/Intro";
import ServicesHome from "../components/ServicesHome";
import Overview from "../components/accueil/Overview";
import Recruitment from "../components/accueil/Recruitment";
import ScrollToTop from "../components/ScrollToTop";
import { HashLink as Link } from 'react-router-hash-link';

const Accueil = () => {

  return (
    <main>
      <Intro />
      <ServicesHome />
      <div className="btnContainer">
        <Link className="btn" to="/Services#">
          En savoir plus
        </Link>
      </div>
      <Overview />
      <Recruitment />
      <ScrollToTop />
    </main>
  );
};

export default Accueil;
