const Empowerment = () => {
  return (
    <section className="empowerment">
        <h2 className="sectionTitle" tabIndex="0">Agréments et habilitations</h2>
      <div className="empowerment__content">
        <div className="empowerment__content__left">
          <ul>
            <li tabIndex="0">Conseil départemental de Meurthe et Moselle</li>
            <li tabIndex="0">CARSAT</li>
            <li tabIndex="0">AGIRC-ARRCO "Sortir Plus"</li>
            <li tabIndex="0">RMA "Ressources Mutuelles Assistance</li>
            <li tabIndex="0">Sécurité Sociale Militaire</li>
            <li tabIndex="0">CESU</li>
          </ul>
        </div>
        <div className="empowerment__content__right">
          <h3 tabIndex="0">AMC adhère à:</h3>
          <ul>
            <li tabIndex="0"> la charte nationale qualité des services à la personne</li>
            <li tabIndex="0">
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
