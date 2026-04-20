// ============================================================
// Topic 6 Basic 3, 5 — Task Schema & Model (title, status, priority)
// Topic 6 Int 4 — isDeleted: false field
// Topic 7 Basic 5 — enum for status (Pending, In Progress, Completed)
// Topic 11 Int 1 — assignedTo referencing employee/intern
// Topic 12 Adv 2 — status enum
// Final Challenge — full Task schema
// ============================================================

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },

    // Topic 11 Int 1: assignedTo references Intern (Final Challenge)
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Intern",
      required: [true, "Assigned intern is required"],
    },

    // Topic 7 Basic 5: enum validation for status
    status: {
      type: String,
      enum: {
        values: ["Pending", "In Progress", "Completed"],
        message: "{VALUE} is not a valid status. Use: Pending, In Progress, or Completed",
      },
      default: "Pending",
    },

    priority: {
      type: String,
      enum: {
        values: ["Low", "Medium", "High"],
        message: "{VALUE} is not a valid priority. Use: Low, Medium, or High",
      },
      default: "Medium",
    },

    // Topic 6 Int 4: isDeleted default false
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Final Challenge: timestamps
    timestamps: true,
  }
);

// Final Challenge: index on task status
taskSchema.index({ status: 1 });

taskSchema.query.nonDeleted = function nonDeleted() {
  return this.where({ isDeleted: false });
};

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
