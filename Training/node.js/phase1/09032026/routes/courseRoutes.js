const {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

function handleCourseRoutes(req, res) {
  const { method, url } = req;
  const courseIdMatch = url.match(/^\/courses\/(\d+)$/);

  if (method === "GET" && url === "/courses") {
    return getAllCourses(req, res);
  }

  if (method === "POST" && url === "/courses") {
    return createCourse(req, res);
  }

  if (method === "PUT" && courseIdMatch) {
    const id = Number(courseIdMatch[1]);
    return updateCourse(req, res, id);
  }

  if (method === "DELETE" && courseIdMatch) {
    const id = Number(courseIdMatch[1]);
    return deleteCourse(req, res, id);
  }

  return false;
}

module.exports = { handleCourseRoutes };
