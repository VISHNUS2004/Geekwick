const express = require("express");
const {
  createEmployee,
  getEmployees,
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/").post(createEmployee).get(getEmployees);

module.exports = router;
