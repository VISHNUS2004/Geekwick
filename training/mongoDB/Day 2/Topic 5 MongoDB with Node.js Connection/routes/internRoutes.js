const express = require("express");
const {
  createIntern,
  getAllInterns,
  getInternById,
  getActiveInterns,
  updateIntern,
  softDeleteIntern,
} = require("../controllers/internController");

const router = express.Router();

router.get("/active", getActiveInterns);
router.route("/").post(createIntern).get(getAllInterns);
router.route("/:id").get(getInternById).put(updateIntern).delete(softDeleteIntern);

module.exports = router;
