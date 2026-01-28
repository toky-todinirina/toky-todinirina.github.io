import Section from "../common/Section";
import Button from "../common/Button";
import "../../styles/components/contact.scss";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle={
        <>
            Discutons de votre <span class='highlight'>projet</span>
        </>
      }
      align="center"
    >
      <div className="contact">
        {/* CARD INFO */}
        <div className="contact__card contact__info">
          <h3>Mes coordonnées</h3>
          <p>
            N’hésitez pas à me contacter pour discuter d’un projet,
            d’une collaboration ou simplement échanger.
          </p>

          <ul className="contact__list">
            <li>
              <FiMail />
              <span>tokyangelo050@gmail.com</span>
            </li>
            <li>
              <FiPhone />
              <span>+261 34 38 754 35</span>
            </li>
            <li>
              <FiMapPin />
              <span>Madagascar</span>
            </li>
          </ul>
        </div>

        {/* CARD FORM */}
        <div className="contact__card contact__form">
          <h3>Envoyer un message</h3>

          <form>
            <div className="form-group">
              <input type="text" placeholder="Votre nom" />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Votre email" />
            </div>

            <div className="form-group">
              <textarea placeholder="Votre message" rows="4" />
            </div>
            <Button variant="primary" type="submit" className="btn--primary">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
