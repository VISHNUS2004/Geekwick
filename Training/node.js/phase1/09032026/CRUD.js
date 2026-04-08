const http = require("http");

const PORT = 3002;

const students = [
	{ id: 1, name: "Vishnu", branch: "Computer Science" },
	{ id: 2, name: "Asha", branch: "Electronics" },
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

const server = http.createServer(async (req, res) => {
	const { method, url } = req;
	const studentIdMatch = url.match(/^\/students\/(\d+)$/);

	if (method === "GET" && url === "/") {
		return sendJson(res, 200, {
			message: "Student CRUD API is running",
			routes: [
				"GET /students",
				"GET /students/:id",
				"POST /students",
				"PUT /students/:id",
				"DELETE /students/:id",
			],
		});
	}

	if (method === "GET" && url === "/students") {
		return sendJson(res, 200, students);
	}

	if (method === "GET" && studentIdMatch) {
		const id = Number(studentIdMatch[1]);
		const student = students.find((item) => item.id === id);

		if (!student) {
			return sendJson(res, 404, { error: "Student not found" });
		}

		return sendJson(res, 200, student);
	}

	if (method === "POST" && url === "/students") {
		try {
			const { name, branch } = await getRequestBody(req);

			if (!name || !branch) {
				return sendJson(res, 400, { error: "name and branch are required" });
			}

			const newStudent = {
				id: students.length ? students[students.length - 1].id + 1 : 1,
				name,
				branch,
			};

			students.push(newStudent);
			return sendJson(res, 201, newStudent);
		} catch (error) {
			return sendJson(res, 400, { error: error.message });
		}
	}

	if (method === "PUT" && studentIdMatch) {
		const id = Number(studentIdMatch[1]);
		const studentIndex = students.findIndex((item) => item.id === id);

		if (studentIndex === -1) {
			return sendJson(res, 404, { error: "Student not found" });
		}

		try {
			const { name, branch } = await getRequestBody(req);

			if (!name || !branch) {
				return sendJson(res, 400, { error: "name and branch are required" });
			}

			students[studentIndex] = { id, name, branch };
			return sendJson(res, 200, students[studentIndex]);
		} catch (error) {
			return sendJson(res, 400, { error: error.message });
		}
	}

	if (method === "DELETE" && studentIdMatch) {
		const id = Number(studentIdMatch[1]);
		const studentIndex = students.findIndex((item) => item.id === id);

		if (studentIndex === -1) {
			return sendJson(res, 404, { error: "Student not found" });
		}

		const deletedStudent = students.splice(studentIndex, 1)[0];
		return sendJson(res, 200, {
			message: "Student deleted successfully",
			student: deletedStudent,
		});
	}

	return sendJson(res, 404, { error: "Route not found" });
});

server.listen(PORT, () => {
	console.log(`CRUD API server running at http://localhost:${PORT}`);
});
