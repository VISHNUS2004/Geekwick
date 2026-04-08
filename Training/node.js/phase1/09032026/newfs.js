const http = require("http");

const PORT = 3003;

const students = [
	{ id: 1, name: "John Doe", branch: "Computer Science" },
	{ id: 2, name: "Arjun", branch: "Electronics" },
	{ id: 3, name: "Asha", branch: "Information Technology" },
];

function sendJson(res, statusCode, data) {
	res.writeHead(statusCode, { "Content-Type": "application/json" });
	res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
	const { method, url } = req;
	const studentIdMatch = url.match(/^\/students\/(\d+)$/);

	if (method === "GET" && url === "/") {
		return sendJson(res, 200, {
			message: "Task 6 API running",
			endpoint: "GET /students/:id",
		});
	}

	if (method === "GET" && studentIdMatch) {
		const id = Number(studentIdMatch[1]);
		const student = students.find((item) => item.id === id);

		if (!student) {
			return sendJson(res, 404, { error: "Student not found" });
		}

		return sendJson(res, 200, student);
	}

	return sendJson(res, 404, { error: "Route not found" });
});

server.listen(PORT, () => {
	console.log(`Task 6 server running at http://localhost:${PORT}`);
});
