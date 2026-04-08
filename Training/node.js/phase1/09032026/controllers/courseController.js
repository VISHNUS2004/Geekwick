const courses = [
  { id: 1, title: "Node.js Basics", duration: "4 weeks" },
  { id: 2, title: "JavaScript Advanced", duration: "6 weeks" },
];

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON body"));
      }
    });
  });
}

function getAllCourses(req, res) {
  return sendJson(res, 200, courses);
}

async function createCourse(req, res) {
  try {
    const { title, duration } = await getRequestBody(req);

    if (!title || !duration) {
      return sendJson(res, 400, { error: "title and duration are required" });
    }

    const newCourse = {
      id: courses.length ? courses[courses.length - 1].id + 1 : 1,
      title,
      duration,
    };

    courses.push(newCourse);
    return sendJson(res, 201, newCourse);
  } catch (error) {
    return sendJson(res, 400, { error: error.message });
  }
}

async function updateCourse(req, res, id) {
  const courseIndex = courses.findIndex((item) => item.id === id);

  if (courseIndex === -1) {
    return sendJson(res, 404, { error: "Course not found" });
  }

  try {
    const { title, duration } = await getRequestBody(req);

    if (!title || !duration) {
      return sendJson(res, 400, { error: "title and duration are required" });
    }

    courses[courseIndex] = { id, title, duration };
    return sendJson(res, 200, courses[courseIndex]);
  } catch (error) {
    return sendJson(res, 400, { error: error.message });
  }
}

function deleteCourse(req, res, id) {
  const courseIndex = courses.findIndex((item) => item.id === id);

  if (courseIndex === -1) {
    return sendJson(res, 404, { error: "Course not found" });
  }

  const deletedCourse = courses.splice(courseIndex, 1)[0];
  return sendJson(res, 200, {
    message: "Course deleted successfully",
    course: deletedCourse,
  });
}

module.exports = {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
