import history from "../../assets/icons/history.png";

const Historical = () => {
  return (
    <section className="historical">
      <div className="historical__header">
        <h2 className="sectionTitle">Notre historique...</h2>
        <img
          src={history}
          className="historical__header__logo"
          alt="horloge"
        ></img>
      </div>
      <div className="historical__grid">
        <div className="historical__grid__2006">2006</div>
        <div className="historical__grid__2007">2007</div>
        <div className="historical__grid__2010">2010</div>
        <div className="historical__grid__2015">2015</div>
        <div className="historical__grid__2016">2016</div>
        <div className="historical__grid__separator1">·</div>
        <div className="historical__grid__separator2">·</div>
        <div className="historical__grid__separator3">·</div>
        <div className="historical__grid__separator4">·</div>
        <div className="historical__grid__separator5">·</div>
        <div className="historical__grid__2006fact">
          AMC s’inscrit dans le plan de développement des services d’aide à la
          personne.
        </div>
        <div className="historical__grid__2007fact">
          AMC est agréée simple pour la fourniture de services à la personne.{" "}
        </div>
        <div className="historical__grid__2010fact">
          AMC est agréée Qualité pour la fourniture de services à la personne.
        </div>
        <div className="historical__grid__2015fact">
          L’agrément AMC est renouvelé pour 5 ans après un audit externe.
        </div>
        <div className="historical__grid__2016fact">
          Décret 2016-502 du 22avril 2016 de la loi ASV (Adaptation de la
          Société au Vieillissement) L’agrément Qualité de l’association passe
          sous le régime de l’autorisation de 15 ans
        </div>
      </div>
    </section>
  );
};

export default Historical;
