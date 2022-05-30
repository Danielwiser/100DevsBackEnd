const figlet = require("figlet");
const http = require("http");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("passport-local");
const fs = require("fs");

const bodyparser = require("body-parser");
//const urlEncoded = require("url");

const express = require("express");
const app = express();

/* middleware */
app.use(body-parser);
//app.use(ur-lEncoded);
app.use(express.static(__dirname + "/public"));
const multer = require("multer");
app.use(express.json());
app.use(urlencoded)
const port = 3000;
app.listen(port, () => {
  console.log("server running");
});

/* Routes */

app.get("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200).send(req.body);
});

const hostname = "127.0.0.1";

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
