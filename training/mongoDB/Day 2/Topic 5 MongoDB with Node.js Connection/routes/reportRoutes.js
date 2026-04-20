const express = require("express");
const { groupInternsByDepartment } = require("../controllers/reportController");

const router = express.Router();

router.get("/interns-by-department", groupInternsByDepartment);

module.exports = router;
