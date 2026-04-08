const express = require("express");
const app = express();

const categoryRoutes = require("./routes/categoryRoutes");
const logger = require("../order-service/middleware/logger");

app.use(logger);

app.use(express.json());
app.use("/categories", categoryRoutes);

app.listen(4002, () => {
  console.log("Category Service running on port 4002");
});