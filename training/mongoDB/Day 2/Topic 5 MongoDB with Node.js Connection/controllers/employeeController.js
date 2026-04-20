const Employee = require("../models/Employee");
const asyncHandler = require("../utils/asyncHandler");

const createEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.create(req.body);

  res.status(201).json({
    success: true,
    data: employee,
  });
});

const getEmployees = asyncHandler(async (req, res) => {
  let query = Employee.find().activeNonDeleted();

  if (req.query.department) {
    query = query.where({ department: req.query.department });
  }

  if (req.query.minSalary) {
    query = query.where({ salary: { $gt: Number(req.query.minSalary) } });
  }

  const employees = await query;

  res.status(200).json({
    success: true,
    count: employees.length,
    data: employees,
  });
});

module.exports = {
  createEmployee,
  getEmployees,
};
