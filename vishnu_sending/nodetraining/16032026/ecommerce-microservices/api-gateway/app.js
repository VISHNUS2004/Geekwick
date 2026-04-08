const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const verifyToken = require("./middleware/verifyToken");
const checkAdmin = require("./middleware/checkAdmin");

const app = express();

app.use(express.json());

app.use("/auth", createProxyMiddleware({
  target: "http://localhost:5000",
  changeOrigin: true
}));

app.use("/products", verifyToken, createProxyMiddleware({
  target: "http://localhost:4001",
  changeOrigin: true
}));

app.post("/products", verifyToken, checkAdmin, createProxyMiddleware({
  target: "http://localhost:4001",
  changeOrigin: true
}));

app.use("/categories", verifyToken, createProxyMiddleware({
  target: "http://localhost:4002",
  changeOrigin: true
}));

app.post("/categories", verifyToken, checkAdmin, createProxyMiddleware({
  target: "http://localhost:4002",
  changeOrigin: true
}));

app.use("/orders", verifyToken, createProxyMiddleware({
  target: "http://localhost:4003",
  changeOrigin: true
}));

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});