const express = require('express');
const app = express();

// Home
app.get('/', (req, res) => {
    res.send('Hello, I am Gowda Kaushik Chandra. Welcome to my portfolio!');
});

// About
app.get('/about', (req, res) => {
    res.send('AI & ML Engineer with hands-on experience building deep learning and computer vision systems. Developed a multimodal deepfake detection framework achieving 88.78% accuracy on FaceForensics++.');
});

// Skills
app.get('/skills', (req, res) => {
    res.send('Skills: Python, C/C++, Java, TensorFlow, Keras, Scikit-learn, Transformers, OpenCV, YOLO, MongoDB, MySQL, HTML, CSS, JavaScript.');
});

// Education
app.get('/education', (req, res) => {
    res.send('B.E. Computer Science & Engineering (AI & ML) from ATME College of Engineering with CGPA 8.32. Completed PUC from Times PU College with 92%.');
});

// Experience
app.get('/experience', (req, res) => {
    res.send('Data Science Intern at Geekwick Techmedia Services Pvt Ltd (Feb 2026 - Present). Worked on machine learning models, feature engineering, hyperparameter tuning, and ML pipeline development.');
});

// Projects
app.get('/projects', (req, res) => {
    res.send('Projects: 1) Deepfake Face-Swap Detection System with CNN + BiLSTM achieving 88.78% accuracy. 2) AI-Based Resume Builder for generating ATS-friendly resumes.');
});

// Certifications
app.get('/certifications', (req, res) => {
    res.send('Certifications: AWS APAC Solutions Architecture Simulation, NVIDIA Building LLM Applications with Prompt Engineering, IBM AI & Cloud Program.');
});

// Contact
app.get('/contact', (req, res) => {
    res.send('Contact: Phone - 8431782461 | Email - kaushik4020@gmail.com | LinkedIn - linkedin.com/in/kaushik');
});

app.listen(5000, () => console.log('Server is running on port 5000'));