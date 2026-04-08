const products = require("../data/products");

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {

  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
};

exports.addProduct = (req, res) => {

  const newProduct = {
    id: products.length + 1,
    ...req.body
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

exports.updateStock = (req, res) => {

  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { quantity } = req.body;

  if (product.stock < quantity) {
    return res.status(400).json({
      message: "Not enough stock"
    });
  }

  product.stock -= quantity;

  res.json({
    message: `Stock updated successfully. Remaining stock: ${product.stock}`,
    product
  });

};