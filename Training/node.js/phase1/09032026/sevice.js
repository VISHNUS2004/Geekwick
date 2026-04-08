const http = require("http");

function sendJson(res, statusCode, payload) {
	res.writeHead(statusCode, { "Content-Type": "application/json" });
	res.end(JSON.stringify(payload));
}

function createService({ serviceName, port, routePath, data }) {
	const server = http.createServer((req, res) => {
		const { method, url } = req;

		if (method === "GET" && url === "/") {
			return sendJson(res, 200, {
				service: serviceName,
				message: `${serviceName} is running`,
				endpoint: `GET ${routePath}`,
			});
		}

		if (method === "GET" && url === routePath) {
			return sendJson(res, 200, data);
		}

		return sendJson(res, 404, { message: "Route not found" });
	});

	server.listen(port, () => {
		console.log(`${serviceName} started on http://localhost:${port}`);
	});
}

createService({
	serviceName: "Student Service",
	port: 3001,
	routePath: "/students",
	data: [
		{ id: 1, name: "Vishnu", branch: "Computer Science" },
		{ id: 2, name: "Asha", branch: "Electronics" },
	],
});

createService({
	serviceName: "Course Service",
	port: 3002,
	routePath: "/courses",
	data: [
		{ id: 1, title: "Node.js Basics", duration: "4 weeks" },
		{ id: 2, title: "JavaScript Advanced", duration: "6 weeks" },
	],
});

createService({
	serviceName: "College Service",
	port: 3003,
	routePath: "/colleges",
	data: [
		{ id: 1, name: "Geekwick College", city: "Chennai" },
		{ id: 2, name: "Tech Valley Institute", city: "Coimbatore" },
	],
});
