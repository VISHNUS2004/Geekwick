const Intern = require("../models/Intern");
const asyncHandler = require("../utils/asyncHandler");
const errorResponse = require("../utils/errorResponse");

const createIntern = asyncHandler(async (req, res) => {
  const intern = await Intern.create(req.body);

  const populatedIntern = await Intern.findById(intern._id).populate(
    "departmentId",
    "name description"
  );

  res.status(201).json({
    success: true,
    data: populatedIntern,
  });
});

const getAllInterns = asyncHandler(async (req, res) => {
  const { department, minAge, maxAge } = req.query;
  const filter = { isDeleted: false };

  if (department) {
    filter.departmentId = department;
  }

  if (minAge || maxAge) {
    filter.age = {};
    if (minAge) {
      filter.age.$gte = Number(minAge);
    }
    if (maxAge) {
      filter.age.$lte = Number(maxAge);
    }
  }

  const interns = await Intern.find(filter).populate(
    "departmentId",
    "name description"
  );

  res.status(200).json({
    success: true,
    count: interns.length,
    data: interns,
  });
});

const getInternById = asyncHandler(async (req, res) => {
  const intern = await Intern.findOne({
    _id: req.params.id,
    isDeleted: false,
  }).populate("departmentId", "name description");

  if (!intern) {
    return errorResponse(res, 404, "Intern not found");
  }

  res.status(200).json({
    success: true,
    data: intern,
  });
});

const getActiveInterns = asyncHandler(async (_req, res) => {
  const interns = await Intern.find()
    .activeNonDeleted()
    .populate("departmentId", "name description");

  res.status(200).json({
    success: true,
    count: interns.length,
    data: interns,
  });
});

const updateIntern = asyncHandler(async (req, res) => {
  const intern = await Intern.findOneAndUpdate(
    {
      _id: req.params.id,
      isDeleted: false,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  ).populate("departmentId", "name description");

  if (!intern) {
    return errorResponse(res, 404, "Intern not found");
  }

  res.status(200).json({
    success: true,
    data: intern,
  });
});

const softDeleteIntern = asyncHandler(async (req, res) => {
  const intern = await Intern.findOneAndUpdate(
    {
      _id: req.params.id,
      isDeleted: false,
    },
    {
      isDeleted: true,
      isActive: false,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!intern) {
    return errorResponse(res, 404, "Intern not found");
  }

  res.status(200).json({
    success: true,
    message: "Intern soft deleted successfully",
    data: intern,
  });
});

module.exports = {
  createIntern,
  getAllInterns,
  getInternById,
  getActiveInterns,
  updateIntern,
  softDeleteIntern,
};
