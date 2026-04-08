const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

/* USER SERVICE */

app.get("/users", async (req, res) => {
  const response = await axios.get("http://localhost:3001/users");
  res.json(response.data);
});

app.get("/users/:id", async (req, res) => {
  const response = await axios.get(`http://localhost:3001/users/${req.params.id}`);
  res.json(response.data);
});

/* COURSE SERVICE */

app.get("/courses", async (req, res) => {
  const response = await axios.get("http://localhost:3002/courses");
  res.json(response.data);
});

app.get("/courses/:id", async (req, res) => {
  const response = await axios.get(`http://localhost:3002/courses/${req.params.id}`);
  res.json(response.data);
});

/* ENROLLMENT SERVICE */

app.post("/enroll", async (req, res) => {
  const response = await axios.post("http://localhost:3003/enroll", req.body);
  res.json(response.data);
});

app.get("/enrollments", async (req, res) => {
  const response = await axios.get("http://localhost:3003/enrollments");
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});