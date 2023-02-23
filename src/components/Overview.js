import hands from "../assets/hands.jpg";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  const handleServices = () => {
    navigate("/Apropos");
  };
  return (
    <section className="overview">
      <div className="overview__content">
        <div className="overview__content__txt">
          <p>
            AMC est une association basée à Toul et créée en 2006, s'assurant du
            bien-être des personnes fragiles. Selon les chiffres de
            l’association Les Petits Frères des Pauvres, un demi-million de
            personnes âgées ne rencontrent jamais ou quasiment jamais d’autres
            personnes. Un nombre en hausse de 77 % en 4 ans selon le baromètre «
            Solitude et isolement quand on a plus de 60 ans en France en 2021 ».
            Cette situation tient très à coeur notre association, qui oeuvre
            chaque jour pour que chaque bénéficiaire reçoive l'aide nécéssaire à
            son bien être. La bienveillance et la réactivité sont les
            maîtres-mots de notre organisme. Chez AMC, chaque assistant·e· de
            vie est qualifié·e· et veillera avec attention sur vos proches.
          </p>
          <div className="btnContainer">
            <button onClick={handleServices} className="btn">
              En savoir plus
            </button>
          </div>
        </div>
        <div className="overview__content__img">
          <img
            src={hands}
            alt="personne tenant la main d'une personne âgée"
          ></img>
        </div>
      </div>
      <div className="overview__background"></div>
    </section>
  );
};

export default Overview;
