const http = require('node:http');
const fs = require('fs');

// import http from 'http';         // ES6 module syntax 

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');

res.setHeader('Content-Type', 'text/html');
res.end('<h1> hello world </h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


