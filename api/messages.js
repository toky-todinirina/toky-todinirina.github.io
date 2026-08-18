import connectToDatabase from "./lib/mongodb.js";
import Message from "./models/Message.js";
import {Resend} from "resend"; 



const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req, res) {
  // Autoriser uniquement POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email and message are required.",
      });
    }

    // Validation simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Please provide a valid email address.",
      });
    }

    // Connexion à MongoDB
    await connectToDatabase();

    // Création du message
    const newMessage = await Message.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || "",
      message: message.trim(),
    });


await resend.emails.send({
  from: "ACUSE DE RECEPTION <tokyangelo050@gmail.com>",
  to: [email.trim()],
  subject: "Merci pour votre message",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Bonjour ${name.trim()},</h2>

      <p>
        Merci d'avoir pris le temps de me contacter via mon portfolio.
      </p>

      <p>
        J'ai bien reçu votre message et je reviendrai vers vous
        dans les meilleurs délais.
      </p>

      <hr />

      <p>
        <strong>Objet :</strong>
        ${subject?.trim() || "Non précisé"}
      </p>

      <p>
        <strong>Votre message :</strong>
      </p>

      <p>
        ${message.trim()}
      </p>

      <hr />

      <p>
        Cordialement,<br />
        <strong>Toky Todinirina</strong>
      </p>
    </div>
  `,
});



await resend.emails.send({
  from: "PORTFOLIO  <onboarding@resend.dev>",
  to: [process.env.CONTACT_NOTIFICATION_EMAIL],
  subject: `Nouveau message — ${subject?.trim() || "Sans objet"}`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>📩 Nouveau message reçu</h2>

      <p><strong>Nom :</strong> ${name.trim()}</p>

      <p><strong>Email :</strong> ${email.trim()}</p>

      <p><strong>Objet :</strong> ${
        subject?.trim() || "Non précisé"
      }</p>

      <hr />

      <p><strong>Message :</strong></p>

      <p>${message.trim()}</p>

      <hr />

      <p>
        Ce message a été envoyé depuis votre portfolio.
      </p>
    </div>
  `,
});


    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      data: {
        id: newMessage._id,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
}