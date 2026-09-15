import connectToDatabase from "./lib/mongodb.js";
import ExperienceStory from "./models/ExperienceStory.js";
import { experiences } from "../src/data/experiences.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  if (typeof id !== "string" || !id.trim()) {
    return res.status(400).json({ error: "Experience id is required" });
  }

  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    return res.status(404).json({ error: "Experience not found" });
  }

  try {
    await connectToDatabase();

    let storedStory = await ExperienceStory.findOne({
      experienceId: id,
    }).lean();

    if (!storedStory) {
      storedStory = await ExperienceStory.create({
        experienceId: id,
        story: experience.story || {},
      });

      storedStory = storedStory.toObject();
    }

    const story = {
      ...(experience.story || {}),
      ...(storedStory.story || {}),
    };

    return res.status(200).json({
      experienceId: storedStory.experienceId,
      story,
    });
  } catch (error) {
    console.error("Experience story API error:", error);

    return res.status(500).json({
      error: "Unable to load experience story",
    });
  }
}