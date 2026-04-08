const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

let enrollments = [];

app.post("/enroll", async (req, res) => {

  const { userId, courseId } = req.body;

  try {

    const user = await axios.get(`http://localhost:3001/users/${userId}`);
    const course = await axios.get(`http://localhost:3002/courses/${courseId}`);

    enrollments.push({
      user: user.data,
      course: course.data
    });

    res.json({
      message: "Enrollment successful",
      user: user.data,
      course: course.data
    });

  } catch (error) {

    res.json({
      message: "User or Course not found"
    });

  }

});

app.get("/enrollments", (req, res) => {
  res.json(enrollments);
});

app.listen(3003, () => {
  console.log("Enrollment Service running on port 3003");
});