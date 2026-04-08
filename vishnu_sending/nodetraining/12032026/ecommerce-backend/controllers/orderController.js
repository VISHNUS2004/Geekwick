const products = require('../data/products');
const orders = require('../data/orders');

exports.getOrders = (req, res) => {
  res.json(orders);
};

exports.createOrder = (req, res) => {

  const { productId, quantity } = req.body;

  if (!productId || quantity <= 0) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const totalPrice = product.price * quantity;

  product.stock -= quantity;

  const newOrder = {
    id: Date.now(),
    productId,
    quantity,
    totalPrice
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
};