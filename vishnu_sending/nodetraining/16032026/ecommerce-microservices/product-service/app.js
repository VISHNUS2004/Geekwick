const express = require("express");
const app = express();

const logger = require("../order-service/middleware/logger");

const productRoutes = require("./routes/productRoutes");

app.use(express.json());
app.use(logger);   // middleware added here

app.use("/products", productRoutes);

app.listen(4001, () => {
  console.log("Product Service running on port 4001");
});