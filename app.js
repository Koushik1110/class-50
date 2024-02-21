// text type

// const http = require("http");

// const server = http.createServer((req, res) => {
//   req.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello! you have now accessed to our server!");
// });

// const PORT = 8080;

// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// type json

// const http = require("http");

// const server = http.createServer((req, res) => {
//   req.writeHead(200, { "Content-Type": "application/json" });

//   const jsonRes = {
//     message: "Hello, Welcome to our server!",
//     timestamp: new Date().toLocaleDateString(),
//   };

//   res.end(JSON.stringify(jsonRes));
// });

// const PORT = 8080;

// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// type html

// const http = require("http");

// const server = http.createServer((req, res) => {
//   req.writeHead(200, { "Content-Type": "text/html" });

//   const htmlRes = `
//   <div>
//   <p>Hello, Welcome to our server.</p>
//   </div>
//   `;

//   res.end(htmlRes);
// });

// const PORT = 8080;

// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// create server

// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   switch (url) {
//     case "/":
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Welcome to home!");
//       break;
//     case "/about":
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Welcome to about!");
//       break;
//     case "/products":
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Welcome to products!");
//       break;
//     case "/contacts":
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Welcome to contacts!");
//     default:
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("ERR! Page not found!");
//   }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on port:${PORT}`);
// });

//microtask que

// console.log("Start"); //synchronous

// setTimeout(() => {
//   console.log("Microtask 3");
// }, 3000);

// process.nextTick(() => {
//   console.log("Microtask "); //asynchronous 2
// });

// console.log("End"); // synchronous
