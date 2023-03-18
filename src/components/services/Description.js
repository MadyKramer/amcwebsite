import help from "../../assets/icons/help.png";

const Description = () => {
  return (
    <section className="description">
      <div className="description__container" >
        <div className="description__container__card">
          <p>
            AMC vient en aide aux personnes handicapées (Parkinson, Alzheimer…),
            des personnes âgées et des personnes de retour d’hospitalisation.
            <br /> <br />
            Afin de respecter votre dignité, nous vous attribuerons une
            assistante de vie, et celle-ci sera remplacée qu’en cas d’absence.
            Notre personnel s’engage à vous offrir confort et sérénité.
            <br /> <br />
            Nous intervenons dans le cadre de maintien à domicile, mais
            également lors de missions ponctuelles. Qu’il s’agisse d’aide à la
            toilette, de confection du repas ou bien d’accompagnement, nous nous
            adaptons à vos besoins.
          </p>
        </div>
        <img src={help} alt="main tenant une forme de coeur"></img>
      </div>
      <div className="description__background"></div>
    </section>
  );
};

export default Description;
