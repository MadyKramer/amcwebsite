import { servicesDatas } from "../servicesDatas";
import { useNavigate } from "react-router-dom";
const ServicesHome = () => {
  const navigate = useNavigate();
  const handleServices = () => {
    navigate("/Services");
  };
  return (
    <section>
      <h2 className="sectionTitle">Nos Services</h2>
      <div className="servicesHome">
        {servicesDatas.map((service) => (
          <div className="servicesHome__card" key={service.id}>
            <div className="servicesHome__card__icon">
              <img src={service.img} alt=""></img>
            </div>
            <div className="servicesHome__card__name">
              <h3>{service.name}</h3>
            </div>
          </div>
        ))}
        <div className="btnContainer">
          <button onClick={handleServices} className="btn">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
