import connectToDatabase from "./lib/mongodb.js";
import Message from "./models/Message.js";

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