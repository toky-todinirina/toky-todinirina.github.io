export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: "Server AI configuration is missing" });
  }

  try {
    const { message } = req.body;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `You are Toky's portfolio AI assistant.

Your job is to answer questions about Toky Todinirina, his professional profile, skills, services, projects, experience and contact information.

Toky's services are:
- Front-End Development
- Audio & Video Transcription
- Field Data Collection
- Data Entry

Important rules:
- Answer clearly and professionally.
- Only use information provided in this context.
- Never invent clients, projects, prices, qualifications, experience or technologies.
- If information is unavailable, say that the visitor should contact Toky directly.
- Keep answers concise because you are operating inside a terminal interface.`,
            },
            { role: "user", content: message.trim() },
          ],
          temperature: 0.4,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error", data);
      return res.status(response.status).json({ error: "AI provider error" });
    }

    const answer = data.choices?.[0]?.message?.content;
    return res.status(200).json({
      answer: answer || "I couldn't generate a response.",
    });
  } catch (error) {
    console.error("Chat API error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
