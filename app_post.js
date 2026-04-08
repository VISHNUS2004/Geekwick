const { json } = require("body-parser");
const express = require ("express")
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/log", (req, res) => {
    const { message } = req.body;

    fs.appendFile("app.log", message + "\n", () => {
        res.json({ status:"Log saved"});
    });
});

app.listen(3000, () => {
    console.log("http://localhost:3000/log");
});