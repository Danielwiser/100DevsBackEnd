const figlet = require("figlet");
const http = require("http");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("passport-local");
const fs = require("fs").promises;
const { dirname } = require("path");

const hostname = "127.0.0.1";
const port = 3000;
/* create Server usinf HTTP  */

console.log(__dirname + "/index.html");
const server = http.createServer(requestListener);
async function requestListener(req, res) {
  const htmlHome = await fs.readFile(__dirname + "/public/index.html");
  const about = await fs.readFile(__dirname + "/public/index.html");

  res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlHome);
  /* ;

  var url = req.url;

  if (url === "/") {
    res.write(html);
    res.end();
  } else if (url === "/contact") {
    res.write(" Welcome to contact us page");
    res.end();
  } */
}

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
