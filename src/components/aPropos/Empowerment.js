const Empowerment = () => {
  return (
    <section className="empowerment">
        <h2 className="sectionTitle" tabIndex="5">Agréments et habilitations</h2>
      <div className="empowerment__content">
        <div className="empowerment__content__left">
          <ul>
            <li tabIndex="5">Conseil départemental de Meurthe et Moselle</li>
            <li tabIndex="5">CARSAT</li>
            <li tabIndex="5">AGIRC-ARRCO "Sortir Plus"</li>
            <li tabIndex="5">RMA "Ressources Mutuelles Assistance</li>
            <li tabIndex="5">Sécurité Sociale Militaire</li>
            <li tabIndex="5">CESU</li>
          </ul>
        </div>
        <div className="empowerment__content__right">
          <h3 tabIndex="5">AMC adhère à:</h3>
          <ul>
            <li tabIndex="5"> la charte nationale qualité des services à la personne</li>
            <li tabIndex="5">
              {" "}
              la Fédésap (Fédération Française des Services à la Personne et de
              Proximité)
            </li>
          </ul>
        </div>
      </div>
      <div className="empowerment__background"></div>
    </section>
  );
};

export default Empowerment;
