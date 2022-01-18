const http = require("http");
const app = require("./app.js")

const dotenv = require("dotenv");
dotenv.config()

const port = process.env.PORT;
console.log("port: ", port);

const server = http.createServer(app);

server.listen(port)
