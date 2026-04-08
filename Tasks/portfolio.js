const profile = {
	name: "Your Name",
	role: "Web Developer",
	tagline: "I build clean, responsive, and user-friendly web experiences.",
	about:
		"I am a passionate developer who enjoys turning ideas into real products. I focus on building fast, accessible, and visually appealing websites.",
	location: "Your City, India",
	email: "youremail@example.com",
	phone: "+91 98765 43210",
	resumeLink: "#",
	socials: [
		{ label: "GitHub", url: "https://github.com/yourusername" },
		{ label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
		{ label: "Instagram", url: "https://instagram.com/yourusername" }
	],
	skills: [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Node.js",
		"MongoDB",
		"Git",
		"Responsive Design"
	],
	projects: [
		{
			title: "Portfolio Website",
			description: "A modern personal website showcasing my projects and skills.",
			tech: ["HTML", "CSS", "JavaScript"],
			link: "#"
		},
		{
			title: "Task Manager App",
			description: "A productivity app to create, organize, and track daily tasks.",
			tech: ["React", "Node.js", "MongoDB"],
			link: "#"
		},
		{
			title: "Weather Dashboard",
			description: "A weather app that displays live weather data by city name.",
			tech: ["JavaScript", "API Integration", "CSS"],
			link: "#"
		}
	]
};

const styles = `
	* { box-sizing: border-box; margin: 0; padding: 0; }
	body {
		font-family: Inter, Segoe UI, Arial, sans-serif;
		background: #0f172a;
		color: #e2e8f0;
		line-height: 1.6;
	}
	.container {
		width: min(1100px, 92%);
		margin: 0 auto;
	}
	header {
		border-bottom: 1px solid #1e293b;
		position: sticky;
		top: 0;
		backdrop-filter: blur(8px);
		background: rgba(15, 23, 42, 0.85);
		z-index: 10;
	}
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0;
	}
	.brand {
		font-weight: 700;
		letter-spacing: 0.4px;
		color: #38bdf8;
	}
	.nav-links {
		display: flex;
		gap: 1rem;
	}
	.nav-links a {
		color: #cbd5e1;
		text-decoration: none;
		font-size: 0.95rem;
	}
	.nav-links a:hover { color: #38bdf8; }

	section { padding: 4rem 0; }

	.hero {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 2rem;
		align-items: center;
	}
	.hero h1 {
		font-size: clamp(2rem, 4vw, 3.2rem);
		line-height: 1.15;
		margin-bottom: 0.8rem;
	}
	.hero h1 span { color: #38bdf8; }
	.hero p { color: #94a3b8; margin-bottom: 1.2rem; }
	.hero-card {
		background: #111b34;
		border: 1px solid #1e293b;
		border-radius: 16px;
		padding: 1.5rem;
	}
	.hero-card p { margin: 0.4rem 0; }

	.btn-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}
	.btn {
		display: inline-block;
		text-decoration: none;
		padding: 0.65rem 1rem;
		border-radius: 10px;
		border: 1px solid transparent;
		font-weight: 600;
		transition: 0.2s ease;
	}
	.btn-primary {
		background: #38bdf8;
		color: #0f172a;
	}
	.btn-primary:hover { transform: translateY(-1px); }
	.btn-outline {
		border-color: #334155;
		color: #e2e8f0;
	}
	.btn-outline:hover { border-color: #38bdf8; color: #38bdf8; }

	h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
	.muted { color: #94a3b8; }

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
		margin-top: 1rem;
	}
	.skill-pill {
		padding: 0.5rem 0.8rem;
		border-radius: 999px;
		background: #1e293b;
		border: 1px solid #334155;
		font-size: 0.9rem;
	}

	.projects-grid {
		margin-top: 1.3rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.project-card {
		background: #111b34;
		border: 1px solid #1e293b;
		border-radius: 14px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}
	.project-card h3 { font-size: 1.1rem; }
	.tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.tech span {
		font-size: 0.75rem;
		background: #1e293b;
		border: 1px solid #334155;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
	}
	.project-card a {
		color: #38bdf8;
		text-decoration: none;
		font-weight: 600;
	}

	footer {
		border-top: 1px solid #1e293b;
		padding: 1.5rem 0 2rem;
		color: #94a3b8;
		text-align: center;
	}

	@media (max-width: 900px) {
		.hero { grid-template-columns: 1fr; }
		.projects-grid { grid-template-columns: 1fr 1fr; }
	}
	@media (max-width: 640px) {
		.nav { flex-direction: column; gap: 0.8rem; }
		.projects-grid { grid-template-columns: 1fr; }
	}
`;

const app = `
	<header>
		<div class="container nav">
			<div class="brand">${profile.name}</div>
			<nav class="nav-links">
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</nav>
		</div>
	</header>

	<main class="container">
		<section class="hero" id="about">
			<div>
				<h1>Hi, I'm <span>${profile.name}</span></h1>
				<p>${profile.role}</p>
				<p class="muted">${profile.tagline}</p>
				<div class="btn-group">
					<a class="btn btn-primary" href="#projects">View Projects</a>
					<a class="btn btn-outline" href="${profile.resumeLink}" target="_blank" rel="noreferrer">Resume</a>
				</div>
			</div>

			<div class="hero-card">
				<p><strong>About Me</strong></p>
				<p class="muted">${profile.about}</p>
				<p><strong>Location:</strong> ${profile.location}</p>
				<p><strong>Email:</strong> ${profile.email}</p>
				<p><strong>Phone:</strong> ${profile.phone}</p>
			</div>
		</section>

		<section id="skills">
			<h2>Skills</h2>
			<p class="muted">Technologies and tools I use.</p>
			<div class="skills">
				${profile.skills.map((skill) => `<span class="skill-pill">${skill}</span>`).join("")}
			</div>
		</section>

		<section id="projects">
			<h2>Projects</h2>
			<p class="muted">A few things I have worked on.</p>
			<div class="projects-grid">
				${profile.projects
					.map(
						(project) => `
							<article class="project-card">
								<h3>${project.title}</h3>
								<p class="muted">${project.description}</p>
								<div class="tech">
									${project.tech.map((item) => `<span>${item}</span>`).join("")}
								</div>
								<a href="${project.link}" target="_blank" rel="noreferrer">View Project →</a>
							</article>
						`
					)
					.join("")}
			</div>
		</section>

		<section id="contact">
			<h2>Contact</h2>
			<p class="muted">Let’s connect and build something great.</p>
			<div class="btn-group" style="margin-top: 1rem;">
				${profile.socials
					.map(
						(social) =>
							`<a class="btn btn-outline" href="${social.url}" target="_blank" rel="noreferrer">${social.label}</a>`
					)
					.join("")}
			</div>
		</section>
	</main>

	<footer>
		© ${new Date().getFullYear()} ${profile.name}. All rights reserved.
	</footer>
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
document.body.innerHTML = app;
