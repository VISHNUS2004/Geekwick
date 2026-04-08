const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

function validNumber(req, res, next) {
    const { a, b} = req.body;

    if (typeof a !== "number" || typeof b !== "number") {
        return res.status(400).json({ 
            error: "Both a and b must be numbers." ,
            success: false,
        })
    }next()
};
      
app.post("/add", validNumber, (req, res) => {
    const { a, b } = req.body;
    const result = a + b;
    res.status(200).json({
        result:result,
        success: true,
    });
});

app.post("/subtract", validNumber, (req, res) => {
    const { a, b } = req.body;
    const result = a - b;
    res.status(200).json({
        result:result,
        success: true,
    });
});

app.post("/multiply", validNumber, (req, res) => {
    const { a, b } = req.body;
    const result = a * b;
    res.status(200).json({
        result:result,
        success: true,
    });
});

app.post("/divide", validNumber, (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({
            error: "Division by zero is not allowed.",
            success: false,
        });
    }
    const result = a / b;
    res.status(200).json({
        result:result,
        success: true,
    });
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});