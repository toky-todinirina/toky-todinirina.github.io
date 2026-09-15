import mongoose from "mongoose";

const experienceStorySchema = new mongoose.Schema(
  {
    experienceId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    story: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ExperienceStory ||
  mongoose.model("ExperienceStory", experienceStorySchema);