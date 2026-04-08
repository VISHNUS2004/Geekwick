

// const name = process.argv[2];
// const version = process.version;
// const platform = process.platform;

// function greet(user){
//   return `Welcome to GeekWick Internship 
//   Node version:${version} 
//   Platform:${platform} 
//   Hello ${user}`
// }

// if (!name){
//   console.log("Please provide your name.");
// }else {
//   console.log(greet(name));
// }
const os = require('os');

const name = process.argv[2];
const nodeVersion = process.version;
const platform = process.platform;

if (!name) {
    console.log("Please provide your name.");
} else {
    console.log(`Welcome to GeekWick Internship`);
    console.log(`Node.js Version: ${nodeVersion}`);
    console.log(`Platform: ${platform}`);
    console.log(`System User: ${os.userInfo().username}`);
    console.log(`Hello ${name}`);
}
