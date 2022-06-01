const figlet = require("figlet");
const http = require("http");
const url = require("url");
//const jwt = require("jsonwebtoken");
//const bcrypt = require("bcrypt");
//const passport = require("passport");
//const passportLocal = require("passport-local");
const fs = require("fs").promises;
const { dirname } = require("path");

const hostname = "127.0.0.1";
const port = 3000;
//const page = url.parse(req.url).pathname;
/* create Server usinf HTTP  */

console.log(__dirname + "/index.html");
const server = http.createServer(requestListener);
async function requestListener(req, res) {
  const htmlHome = await fs.readFile(__dirname + "/public/index.html");
  const styleCSS = await fs.readFile(__dirname + "/public/css/style.css");
  const mainJS = await fs.readFile(__dirname + "/public/js/main.js");
  
  var url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log("home page");
    res.write(htmlHome);
    res.end();
  } else if (url == "/js/main.js") {
    res.writeHead(200, { "Content-Type": "text/js" });
    console.log("main js loading");
    res.write(mainJS);
    res.end();
  } else if (url == "/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(styleCSS);
    res.end();
  } else if (url == "./public/js/main.js") {
    console.log("js request");
    readWrite("./public/js/main.js", "text/javascript");
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
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
