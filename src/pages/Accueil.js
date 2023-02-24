import Intro from "../components/accueil/Intro";
import ServicesHome from "../components/accueil/ServicesHome";
import Overview from "../components/accueil/Overview";
import Recruitment from "../components/accueil/Recruitment";
import Footer from "../components/Footer";

const Accueil = () => {

  return (
    <main>
      <Intro />
      <ServicesHome />
      <Overview />
      <Recruitment />
      <Footer />
    </main>
  );
};

export default Accueil;
