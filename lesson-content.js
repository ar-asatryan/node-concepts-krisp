// TODO: This Code must be run in ./server.js file

console.log("Test Our Nodejs Application");

const dotenv = require('dotenv');
dotenv.config()
console.log(process.env);

// const port = process.env.PORT || 4477;

console.log(process.pid);

console.log("PORT Number", process.env.PORT);

//console.log(port);
