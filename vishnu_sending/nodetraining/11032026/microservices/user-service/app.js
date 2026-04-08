const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Kaushik", role: "student" },
  { id: 2, name: "Rahul", role: "instructor" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.json({ message: "User not found" });
  }

  res.json(user);
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.json({ message: "User added", data: req.body });
});

app.listen(3001, () => {
  console.log("User Service running on port 3001");
});