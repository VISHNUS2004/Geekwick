const http = require("http");

const PORT = 3000;

// In-memory data for first API practice.
const students = [
	{ id: 1, name: "Vishnu", course: "Node.js" },
	{ id: 2, name: "Asha", course: "JavaScript" },
];

function sendJson(res, statusCode, data) {
	res.writeHead(statusCode, { "Content-Type": "application/json" });
	res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
	const { method, url } = req;

	if (method === "GET" && url === "/") {
		return sendJson(res, 200, {
			message: "Welcome to your first API",
			endpoints: ["GET /", "GET /students", "GET /students/:id", "POST /students"],
		});
	}

	if (method === "GET" && url === "/students") {
		return sendJson(res, 200, students);
	}

	const studentIdMatch = url.match(/^\/students\/(\d+)$/);
	if (method === "GET" && studentIdMatch) {
		const id = Number(studentIdMatch[1]);
		const student = students.find((item) => item.id === id);

		if (!student) {
			return sendJson(res, 404, { error: "Student not found" });
		}

		return sendJson(res, 200, student);
	}

	if (method === "POST" && url === "/students") {
		let body = "";

		req.on("data", (chunk) => {
			body += chunk;
		});

		req.on("end", () => {
			try {
				const parsed = JSON.parse(body);
				const { name, course } = parsed;

				if (!name || !course) {
					return sendJson(res, 400, { error: "name and course are required" });
				}

				const newStudent = {
					id: students.length ? students[students.length - 1].id + 1 : 1,
					name,
					course,
				};

				students.push(newStudent);
				return sendJson(res, 201, newStudent);
			} catch (error) {
				return sendJson(res, 400, { error: "Invalid JSON body" });
			}
		});

		return;
	}

	return sendJson(res, 404, { error: "Route not found" });
});

server.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
