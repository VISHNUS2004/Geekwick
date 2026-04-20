const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    internId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Intern",
      required: [true, "Intern reference is required"],
    },
    date: {
      type: Date,
      required: [true, "Attendance date is required"],
    },
    status: {
      type: String,
      enum: {
        values: ["Present", "Absent", "Late", "Half Day"],
        message: "{VALUE} is not a valid attendance status",
      },
      required: [true, "Attendance status is required"],
    },
    checkInTime: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
