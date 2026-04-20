require("dotenv").config();

const express = require("express");
const departmentRoutes = require("./routes/departmentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const internRoutes = require("./routes/internRoutes");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Intern Task Management Backend is running",
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

app.use("/departments", departmentRoutes);
app.use("/employees", employeeRoutes);
app.use("/interns", internRoutes);
app.use("/tasks", taskRoutes);
app.use("/reports", reportRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

app.use(errorHandler);

module.exports = app;
