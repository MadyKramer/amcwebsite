import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import mappointer from "../../assets/icons/mappointer.png";

const ContactComponent = () => {
  return (
    <section className="contact">
      <h2 className="sectionTitle" tabIndex="0">Une question ? Contactez-nous ! </h2>
      <div className="contact__container">
        <div className="contact__container__details">
          <div className="contact__container__details__phone">
            <img src={phone} alt="téléphone" className="logoSize"></img>
            <p tabIndex="0" aria-label="numéro de téléphone">09 53 02 17 29</p>
          </div>
          <div className="contact__container__details__email">
            <img src={email} alt="email" className="logoSize"></img>
            <p tabIndex="0" aria-label="adresse email">toul@amcsap.fr</p>
          </div>
          <div className="contact__container__details__address">
            <img src={mappointer} alt="adresse" className="logoSize"></img>
            <p tabIndex="0">701 rue Guy Pernin 54200 Toul</p>
            <p tabIndex="0" className="contact__container__details__address__mobility">
              (accessible aux personnes à mobilité réduite)
            </p>
          </div>
        </div>
        <div className="contact__container__map">
          <iframe
            title="AMC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.3068884443555!2d5.9074963155489995!3d48.699614979272184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794ae4342cfbc81%3A0x8ba04290760cbf29!2s701%20rue%20Guy%20Pernin%2C%2054200%20Toul!5e0!3m2!1sfr!2sfr!4v1677415430416!5m2!1sfr!2sfr"
            width="500"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
