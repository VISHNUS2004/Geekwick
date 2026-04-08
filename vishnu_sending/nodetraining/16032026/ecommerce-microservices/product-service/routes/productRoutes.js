const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

router.get("/", controller.getProducts);

router.get("/:id", controller.getProductById);

router.post("/", controller.addProduct);

router.put("/:id/stock", controller.updateStock);

module.exports = router;