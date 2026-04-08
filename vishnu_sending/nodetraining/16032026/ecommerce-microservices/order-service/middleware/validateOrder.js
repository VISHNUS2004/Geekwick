function validateOrder(req, res, next) {

  const { productId, quantity } = req.body;
  console.log("Validation middleware executed");

  if (!productId || !quantity) {
    return res.status(400).json({
      message: "productId and quantity are required"
    });
  }

  if (quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be greater than 0"
    });
  }


  next();
}

module.exports = validateOrder;