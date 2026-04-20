const express = require("express");
const {
  createTask,
  getAllTasks,
  getTasksByInternId,
  updateTaskStatus,
  deleteTask,
  countTasksByStatus,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/status-summary", countTasksByStatus);
router.get("/assigned/:internId", getTasksByInternId);
router.route("/").post(createTask).get(getAllTasks);
router.put("/:id/status", updateTaskStatus);
router.delete("/:id", deleteTask);

module.exports = router;
