const http = require("http");

const PORT = 3001;

const students = [
	{ id: 1, name: "Vishnu", department: "CSE" },
	{ id: 2, name: "Asha", department: "ECE" },
];

const courses = [
	{ id: 1, title: "Node.js Basics", duration: "4 weeks" },
	{ id: 2, title: "JavaScript Advanced", duration: "6 weeks" },
];

const colleges = [
	{ id: 1, name: "Geekwick College", city: "Chennai" },
	{ id: 2, name: "Tech Valley Institute", city: "Coimbatore" },
];

function sendJson(res, statusCode, payload) {
	res.writeHead(statusCode, { "Content-Type": "application/json" });
	res.end(JSON.stringify(payload));
}

const server = http.createServer((req, res) => {
	const { method, url } = req;

	if (method === "GET" && url === "/students") {
		return sendJson(res, 200, students);
	}

	if (method === "GET" && url === "/courses") {
		return sendJson(res, 200, courses);
	}

	if (method === "GET" && url === "/colleges") {
		return sendJson(res, 200, colleges);
	}

	return sendJson(res, 404, {
		error: "Route not found",
		availableRoutes: ["GET /students", "GET /courses", "GET /colleges"],
	});
});

server.listen(PORT, () => {
	console.log(`Task 2 server running at http://localhost:${PORT}`);
});
