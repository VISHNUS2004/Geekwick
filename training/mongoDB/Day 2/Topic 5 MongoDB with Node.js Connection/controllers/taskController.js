const Task = require("../models/Task");
const asyncHandler = require("../utils/asyncHandler");
const errorResponse = require("../utils/errorResponse");

const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  const populatedTask = await Task.findById(task._id).populate(
    "assignedTo",
    "name email departmentId isActive"
  );

  res.status(201).json({
    success: true,
    data: populatedTask,
  });
});

const getAllTasks = asyncHandler(async (req, res) => {
  const filter = {
    isDeleted: false,
  };

  if (req.query.assignedTo) {
    filter.assignedTo = req.query.assignedTo;
  }

  if (req.query.status) {
    filter.status = req.query.status;
  }

  const tasks = await Task.find(filter).populate({
    path: "assignedTo",
    select: "name email departmentId isActive",
    populate: {
      path: "departmentId",
      select: "name",
    },
  });

  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
});

const getTasksByInternId = asyncHandler(async (req, res) => {
  const tasks = await Task.find({
    assignedTo: req.params.internId,
    isDeleted: false,
  }).populate({
    path: "assignedTo",
    select: "name email departmentId",
    populate: {
      path: "departmentId",
      select: "name",
    },
  });

  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
});

const updateTaskStatus = asyncHandler(async (req, res) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: req.params.id,
      isDeleted: false,
    },
    {
      status: req.body.status,
    },
    {
      new: true,
      runValidators: true,
    }
  ).populate("assignedTo", "name email");

  if (!task) {
    return errorResponse(res, 404, "Task not found");
  }

  res.status(200).json({
    success: true,
    data: task,
  });
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    isDeleted: false,
  });

  if (!task) {
    return errorResponse(res, 404, "Task not found");
  }

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    data: task,
  });
});

const countTasksByStatus = asyncHandler(async (_req, res) => {
  const summary = await Task.aggregate([
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $group: {
        _id: "$status",
        totalTasks: { $sum: 1 },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ]);

  res.status(200).json({
    success: true,
    data: summary,
  });
});

module.exports = {
  createTask,
  getAllTasks,
  getTasksByInternId,
  updateTaskStatus,
  deleteTask,
  countTasksByStatus,
};
