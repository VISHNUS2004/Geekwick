// ============================================================
// Topic 6 Basic 2 — Employee Schema (name, email, salary, department)
// Topic 6 Int 1 — timestamps: true
// Topic 7 Basic 2 — email required
// Topic 7 Int 1 — email unique
// Topic 7 Int 3 — maximum salary rule
// Topic 7 Int 4 — regex validation for email
// Topic 8 Adv 5 — fetch only active and non-deleted employees
// Topic 12 Int 1 — employee schema with validations and timestamps
// ============================================================

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Employee name is required"],
      trim: true,
    },

    // Topic 7 Basic 2: email required | Topic 7 Int 1: unique
    // Topic 7 Int 4: regex validation
    email: {
      type: String,
      required: [true, "Employee email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address",
      ],
    },

    // Topic 7 Int 3: maximum salary for test purpose
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary cannot be negative"],
      max: [10000000, "Salary exceeds maximum allowed value"],
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Topic 6 Int 1: timestamps
    timestamps: true,
  }
);

employeeSchema.query.activeNonDeleted = function activeNonDeleted() {
  return this.where({ isActive: true, isDeleted: false });
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
