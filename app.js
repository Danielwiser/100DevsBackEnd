const figlet = require("figlet");
const http = require("http");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("passport-local");
const fs = require('fs');



const hostname = "127.0.0.1";
const port = 3000;
/* create Server usinf HTTP  */
const data= {name:"Mac"}
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, { "Content-Type": "text/html" });

  var url = req.url;

  if (url === "/") {
    res.write(data.name)
    res.end();
  } else if (url === "/contact") {
    res.write(" Welcome to contact us page");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function hashFunction(hashTarget, salt) {
  const hashedTarget = await bcrypt.hash(hashTarget, salt);
  console.log(hashedTarget);
}
/* console.time("hashing");
hashFunction(name, 10);
console.timeEnd("hashing");

console.time("hashing2");
hashFunction(name, 20);
console.timeEnd("hashing2");

 */ async function compare() {
  bcrypt.compare(name, hashedTarget);
}
