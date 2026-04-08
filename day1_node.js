

const name = process.argv[2];
const version = process.version;
const platform = process.platform;

function greet(user){
  return 'Welcome to GeekWick Internship Node version:${version} Platform:${platform} Hello ${user}'
}

if (!name){
  console.log("Please provide your name.");
}else {
  console.log(greet(name));
}