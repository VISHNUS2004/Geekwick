const express = require('express');

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(categoryRoutes);
app.use(orderRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});