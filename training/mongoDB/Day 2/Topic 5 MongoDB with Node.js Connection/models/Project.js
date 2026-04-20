const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    budget: {
      type: Number,
      required: [true, "Project budget is required"],
      min: [0, "Budget cannot be negative"],
    },
    team: {
      type: [String],
      default: [],
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Intern",
      },
    ],
    status: {
      type: String,
      enum: {
        values: ["Planned", "Active", "On Hold", "Completed"],
        message: "{VALUE} is not a valid project status",
      },
      default: "Planned",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
