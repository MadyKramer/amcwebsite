import Intro from "../components/accueil/Intro";
import ServicesHome from "../components/ServicesHome";
import Overview from "../components/accueil/Overview";
import Recruitment from "../components/accueil/Recruitment";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
  const navigate = useNavigate();
  const handleServices = () => {
    navigate("/Services");
  };
  return (
    <main>
      <Intro />
      <ServicesHome />
      <div className="btnContainer">
        <button onClick={handleServices} className="btn">
          En savoir plus
        </button>
      </div>
      <Overview />
      <Recruitment />
    </main>
  );
};

export default Accueil;
