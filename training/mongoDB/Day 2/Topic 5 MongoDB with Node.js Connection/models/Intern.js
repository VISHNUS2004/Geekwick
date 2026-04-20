// ============================================================
// Topic 6 Basic 1, Basic 4 — Intern Schema & Model
// Topic 6 Int 2 — isActive: true default
// Topic 6 Int 3 — skills as array of strings
// Topic 6 Adv 2 — nested address object
// Topic 6 Adv 3 — departmentId reference using ObjectId
// Topic 7 Basic 1 — name required
// Topic 7 Basic 3 — minimum age 18
// Topic 7 Basic 4 — default isActive true
// Topic 7 Int 2 — minlength 3 for name
// Topic 7 Int 4 — regex validation for email
// Topic 7 Adv 2 — mobile number regex validation
// Topic 11 Basic 2 — departmentId reference field
// Topic 12 Basic 5 — index on intern email
// Final Challenge — full Intern schema
// ============================================================

const mongoose = require("mongoose");

const internSchema = new mongoose.Schema(
  {
    // Topic 7 Basic 1: name required | Topic 7 Int 2: minlength 3
    name: {
      type: String,
      required: [true, "Intern name is required"],
      minlength: [3, "Name must be at least 3 characters"],
      trim: true,
    },

    // Topic 7 Basic 3: minimum age 18
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [18, "Age must be at least 18"],
    },

    // Topic 7 Int 4: regex validation for email
    // Topic 12 Basic 3: required email validation
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address",
      ],
    },

    // Topic 7 Adv 2: mobile number regex validation
    mobile: {
      type: String,
      match: [/^[6-9]\d{9}$/, "Please provide a valid 10-digit mobile number"],
    },

    // Topic 6 Adv 3 & Topic 11 Basic 2: departmentId reference
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: [true, "Department is required"],
    },

    // Topic 6 Int 3: skills as array of strings
    skills: {
      type: [String],
      default: [],
    },

    // Topic 6 Int 2 & Topic 7 Basic 4: default isActive true
    isActive: {
      type: Boolean,
      default: true,
    },

    // Soft delete flag (used in Topic 8 Adv 1, Topic 9 Adv 1)
    isDeleted: {
      type: Boolean,
      default: false,
    },

    // Topic 6 Adv 2: nested address object
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      pincode: { type: String },
    },
  },
  {
    // Topic 12 Final: timestamps
    timestamps: true,
  }
);

// Topic 12 Basic 5 & Final: index on intern email
internSchema.index({ email: 1 });

internSchema.query.activeNonDeleted = function activeNonDeleted() {
  return this.where({ isActive: true, isDeleted: false });
};

const Intern = mongoose.model("Intern", internSchema);

module.exports = Intern;
