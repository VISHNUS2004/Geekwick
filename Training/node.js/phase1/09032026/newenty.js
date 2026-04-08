const http = require("http");
const { handleCourseRoutes } = require("./routes/courseRoutes");

const PORT = 3004;

function sendJson(res, statusCode, payload) {
	res.writeHead(statusCode, { "Content-Type": "application/json" });
	res.end(JSON.stringify(payload));
}

const server = http.createServer((req, res) => {
	const { method, url } = req;

	if (method === "GET" && url === "/") {
		return sendJson(res, 200, {
			message: "Course module API is running",
			endpoints: ["GET /courses", "POST /courses", "PUT /courses/:id", "DELETE /courses/:id"],
		});
	}

	const routeHandled = handleCourseRoutes(req, res);
	if (routeHandled !== false) {
		return;
	}

	return sendJson(res, 404, { error: "Route not found" });
});

server.listen(PORT, () => {
	console.log(`Task 7 server running at http://localhost:${PORT}`);
});
