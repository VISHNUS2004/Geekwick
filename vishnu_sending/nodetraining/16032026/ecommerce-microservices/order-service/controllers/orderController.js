const axios = require("axios");
const orders = require("../data/orders");

exports.getOrders = (req, res) => {
  res.json(orders);
};

exports.createOrder = async (req, res) => {

  const { productId, quantity } = req.body;

  try {

    // get product details from product-service
    const response = await axios.get(
      `http://localhost:4001/products/${productId}`
    );

    const product = response.data;

    if (product.stock < quantity) {
      return res.status(400).json({
        message: "Not enough stock available"
      });
    }

    const totalPrice = product.price * quantity;

    // update stock in product-service
    await axios.put(
      `http://localhost:4001/products/${productId}/stock`,
      { quantity }
    );

    const newOrder = {
      id: orders.length + 1,
      productId,
      quantity,
      totalPrice,
      message:`🎉Order placed successfully: ${quantity} ${product.name}(s) ordered🎊.`
    };

    orders.push(newOrder);

    res.status(201).json({
      
      order: newOrder
    });

  } catch (error) {

    res.status(404).json({
      message: "Product not found"
    });

  }

};