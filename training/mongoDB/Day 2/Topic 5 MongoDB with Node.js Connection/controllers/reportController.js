const Intern = require("../models/Intern");
const asyncHandler = require("../utils/asyncHandler");

const groupInternsByDepartment = asyncHandler(async (_req, res) => {
  const report = await Intern.aggregate([
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: "$departmentId",
        totalInterns: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "departments",
        localField: "_id",
        foreignField: "_id",
        as: "department",
      },
    },
    {
      $unwind: {
        path: "$department",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 0,
        departmentId: "$department._id",
        departmentName: "$department.name",
        totalInterns: 1,
      },
    },
  ]);

  res.status(200).json({
    success: true,
    data: report,
  });
});

module.exports = {
  groupInternsByDepartment,
};
