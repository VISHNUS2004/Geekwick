const express = require("express");
const app = express();

app.use(express.json());

let courses = [
  { id: 1, title: "NodeJS Backend", duration: "6 weeks" },
  { id: 2, title: "Machine Learning", duration: "8 weeks" }
];

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/courses/:id", (req, res) => {
  const course = courses.find(c => c.id == req.params.id);

  if (!course) {
    return res.json({ message: "Course not found" });
  }

  res.json(course);
});

app.post("/courses", (req, res) => {
  courses.push(req.body);
  res.json({ message: "Course added", data: req.body });
});

app.listen(3002, () => {
  console.log("Course Service running on port 3002");
});