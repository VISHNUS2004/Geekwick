const express = require("express");
const app = express();

const orderRoutes = require("./routes/orderRoutes");
const logger = require("./middleware/logger");

app.use(logger);

app.use(express.json());
app.use("/orders", orderRoutes);

app.listen(4003, () => {
  console.log("Order Service running on port 4003");
});