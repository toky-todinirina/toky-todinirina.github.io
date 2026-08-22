
import { useState } from "react";
import Section from "../common/Section";
import Button from "../common/Button";
import Highlights from "../common/Hightlights";
import "../../styles/components/contact.scss";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Une erreur est survenue lors de l'envoi."
        );
      }

      setStatus({
        type: "success",
        message: "Votre message a bien été envoyé. Merci !",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Impossible d'envoyer le message. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle={
        <>
          Décrivez votre <Highlights>besoin</Highlights> ou votre projet, et je
          vous répondrai avec la bonne solution.
        </>
      }
      align="center"
    >
      <div className="contact">
        {/* CARD INFO */}
        <div className="contact__card contact__info">
          <h3>Mes coordonnées</h3>

          <p className="contact__intro">
            Je peux vous accompagner sur des missions concrètes, rapides et
            utiles :
          </p>

          <div className="contact__missions" aria-label="Types de missions">
            <span>Collecte de données sur terrain</span>
            <span>Data Entry</span>
             <span>Développement Front-End</span>
            <span>Transcription</span>
          </div>

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

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Objet"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows="4"
                required
              />
            </div>

            {status.message && (
              <p
                className={`contact__status contact__status--${status.type}`}
                role="alert"
              >
                {status.message}
              </p>
            )}

            <Button
              variant="primary"
              type="submit"
              className="btn--primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

