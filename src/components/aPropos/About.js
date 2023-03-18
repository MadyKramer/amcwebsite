import duobench from "../../assets/duobench.jpg";

const About = () => {
  
  return (
    <section className="about">
      <img
        className="about__img"
        src={duobench}
        alt="deux personnes riant sur un banc"
      ></img>
      <div className="about__section" > 
        <div className="about__section__card" >
          <h2 className="sectionTitle" >Qui sommes nous ? </h2>
          <p className="separator">X</p>
          <p className="about__section__card__txt">
            <strong>AMC</strong> a été créée le 1er septembre 2006 par Alain Guérin. Elle
            intervient sur le secteur de <strong>Toul</strong> et ses environs. L'association
            porte assistance aux <strong>personnes âgées</strong> ou toute autre personne ayant
            besoin d'une <strong>aide personnelle à domicile</strong>, à l'exception d'actes
            médicaux. <br />
            <br /> Chez AMC, nous faisons de notre maximum pour que le
            bénéficiaire garde la même <strong>assistante de vie</strong> afin qu'il préserve son
            intimité et pour qu'il puisse être accompagné dans les meilleures
            conditions possibles.
          </p>
        </div>
      </div>
      <div className="about__background"></div>
    </section>
  );
};

export default About;
