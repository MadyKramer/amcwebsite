import Intro from "../components/Intro";
import ServicesHome from "../components/ServicesHome";
import Overview from "../components/Overview";
import Recruitment from "../components/Recruitment";
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
