const Department = require("../models/Department");
const asyncHandler = require("../utils/asyncHandler");

const createDepartment = asyncHandler(async (req, res) => {
  const department = await Department.create(req.body);

  res.status(201).json({
    success: true,
    data: department,
  });
});

module.exports = {
  createDepartment,
};
