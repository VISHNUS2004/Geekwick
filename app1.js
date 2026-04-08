// const fs = require("fs");

// const message = process.argv.slice(2).join(" ") || "Kaushik Gowda";

// fs.appendFile("app.log", message + "\n", () => {
//     console.log("Log saved");
// });

// console.log("Progress finished");
console.log("Task 1");

setTimeout(() => {
    console.log("Task 2(slow)");
},2000);

console.log("Task 3");
