const figlet = require("figlet");
const http = require("http");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("passport-local");
const fs = require('fs');

const express=requie("express")
const app=express()


const hostname = "127.0.0.1";
const port = 3000;

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
