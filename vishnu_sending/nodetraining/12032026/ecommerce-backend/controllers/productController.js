const products = require('../data/products');

// GET all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// ADD product
exports.addProduct = (req, res) => {
  const { name, price, stock, categoryId } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    stock,
    categoryId
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// UPDATE product
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.stock = req.body.stock || product.stock;

  res.json(product);
};

// DELETE product
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);

  res.json({ message: "Product deleted" });
};