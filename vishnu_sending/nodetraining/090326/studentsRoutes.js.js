const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(express.json());

// Read JSON File
const getStudents = () => {
    const data = fs.readFileSync('students.json');
    return JSON.parse(data);
};

// GET Student by ID
app.get('/student/:id', (req, res) => {

    const students = getStudents();

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);

});

// Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});