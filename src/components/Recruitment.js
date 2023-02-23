import enroll from "../assets/icons/enroll.png";

const Recruitment = () => {
  return (
    <section className="recruitment">
      <h2 className="recruitment__title sectionTitle">Nous recrutons !</h2>
      <div className="recruitment__container">
        <img className="recruitment__container__img"src={enroll} alt="personne accompagnant une personne âgée"></img>
        <div className="recruitment__container__announcement">
          <p>
            AMC recrute des assistant·e·s de vie à domicile titulaires d'un
            diplôme professionnel niveau 5, des aides à domicile, des aides
            ménagères ainsi que des accompagnant·e·s. Si vous êtes en
            reconversion professionnelle, nous pouvons également vous faire
            bénéficier d'une formation en interne. Si vous partagez les mêmes
            valeurs que nous, n'attendez plus! Envoyez-nous votre CV ainsi
            qu'une lettre de motivation à l'adresse suivante:
          </p>
          <div className="recruitment__container__announcement__address">
            701 rue Guy Pernin 54200 Toul{" "}
          </div>
          <p>ou envoyez-nous CV et lettre de motivation par email:</p>
          <button className="recruitment__container__announcement__btn">
            En cliquant ici!{" "}
          </button>
        </div>
      </div>
      <div className="recruitment__background"></div>
    </section>
  );
};

export default Recruitment;
