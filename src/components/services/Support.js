import arrow from "../../assets/icons/arrow.png";
import wheelchair from "../../assets/wheelchair.jpg";

const Support = () => {
  return (
    <section className="support">
      <div className="support__picture">
        <img src={wheelchair} alt="fauteuil roulant"></img>
      </div>
      <div className="support__card">
        <div className="support__card__header">
          <h3 tabindex="0">Les prises en charge principales :</h3>
          <p className="separator">x</p>
        </div>
        <div className="support__card__content">
          <div className="support__card__content__situation">
            <p tabindex="0">Situation de handicap et âgé de 20 à 60 ans </p>
          </div>
          <div className="support__card__content__organism">
            <img className="arrow" src={arrow} alt=""></img>
            <p tabindex="0">PCH Conseil Départemental</p>
          </div>
          <div className="support__card__content__situation">
            <p tabindex="0">Retraité âgé d’au moins 60 ans</p>
          </div>
          <div className="support__card__content__organism">
            <img className="arrow" src={arrow} alt=""></img>
            <p tabindex="0">PAP CARSAT</p>
          </div>
          <div className="support__card__content__situation">
            <p tabindex="0">60 ans ou plus et perte d’autonomie</p>
          </div>
          <div className="support__card__content__organism">
            <img className="arrow" src={arrow} alt=""></img>
            <p tabindex="0">APA Conseil Départemental</p>
          </div>
          <div className="support__card__content__situation">
            <p tabindex="0">Toute situation </p>
          </div>
          <div className="support__card__content__organism">
            <img className="arrow" src={arrow} alt=""></img>
            <p tabindex="0">Conseil Départemental ou CCAS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
