import { servicesDatas } from "../servicesDatas";

const ServicesHome = () => {

  return (
    <section>
      <h2 className="sectionTitle" tabIndex="0">Nos Services</h2>
      <div className="servicesHome">
        {servicesDatas.map((service) => (
          <div className="servicesHome__card" role="region" key={service.id}>
            <div className="servicesHome__card__front">
              <div className="servicesHome__card__front__icon">
                <img src={service.img} alt=""></img>
              </div>
              <div className="servicesHome__card__front__name">
                <h3 tabIndex="0" aria-label={service.name}>{service.name}</h3>
              </div>
            </div>
            <div className="servicesHome__card__back">
              <ul>
                {service.description.map((services, index) => (
                  <li key={index}> {services} </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHome;
