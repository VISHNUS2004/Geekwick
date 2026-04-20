require("dotenv").config();

const connectDB = require("./config/db");
const Department = require("./models/Department");
const Intern = require("./models/Intern");
const Employee = require("./models/Employee");
const Task = require("./models/Task");

const seedData = async () => {
  try {
    await connectDB();

    await Promise.all([
      Department.deleteMany({}),
      Intern.deleteMany({}),
      Employee.deleteMany({}),
      Task.deleteMany({}),
    ]);

    const departments = await Department.insertMany([
      {
        name: "HR",
        description: "Human Resources",
      },
      {
        name: "QA",
        description: "Quality Assurance",
      },
      {
        name: "Development",
        description: "Software Development",
      },
    ]);

    const interns = await Intern.insertMany([
      {
        name: "Rahul Kumar",
        age: 22,
        email: "rahul.kumar@example.com",
        mobile: "9876543210",
        departmentId: departments[1]._id,
        skills: ["MongoDB", "Node.js", "Postman"],
        address: {
          city: "Kolkata",
          state: "West Bengal",
        },
      },
      {
        name: "Priya Singh",
        age: 23,
        email: "priya.singh@example.com",
        mobile: "9123456789",
        departmentId: departments[2]._id,
        skills: ["Express", "Mongoose"],
        address: {
          city: "Delhi",
          state: "Delhi",
        },
      },
    ]);

    const employees = await Employee.insertMany([
      {
        name: "Anita Sharma",
        email: "anita.sharma@example.com",
        salary: 45000,
        department: "HR",
      },
      {
        name: "Vikram Das",
        email: "vikram.das@example.com",
        salary: 52000,
        department: "Development",
      },
    ]);

    const tasks = await Task.insertMany([
      {
        title: "Prepare onboarding report",
        assignedTo: interns[0]._id,
        status: "Pending",
        priority: "High",
      },
      {
        title: "Build intern dashboard API",
        assignedTo: interns[1]._id,
        status: "In Progress",
        priority: "Medium",
      },
    ]);

    console.log("Seed completed successfully");
    console.log(`Departments: ${departments.length}`);
    console.log(`Interns: ${interns.length}`);
    console.log(`Employees: ${employees.length}`);
    console.log(`Tasks: ${tasks.length}`);
  } catch (error) {
    console.error(`Seed failed: ${error.message}`);
    process.exitCode = 1;
  } finally {
    const mongoose = require("mongoose");
    await mongoose.connection.close();
  }
};

seedData();
