const Empowerment = () => {
  return (
    <section className="empowerment">
        <h2 className="sectionTitle">Agréments et habilitations</h2>
      <div className="empowerment__content">
        <div className="empowerment__content__left">
          <ul>
            <li>Conseil départemental de Meurthe et Moselle</li>
            <li>CARSAT</li>
            <li>AGIRC-ARRCO "Sortir Plus"</li>
            <li>RMA "Ressources Mutuelles Assitance</li>
            <li>Sécurité Sociale Militaire</li>
            <li>CESU</li>
          </ul>
        </div>
        <div className="empowerment__content__right">
          <h3>AMC adhère à:</h3>
          <ul>
            <li> la charte nationale qualité des services à la personne</li>
            <li>
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
