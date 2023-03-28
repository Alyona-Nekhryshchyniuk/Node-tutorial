const fs = require("fs");
const process = require("process");
const buffer = fs.readFileSync(process.argv[2]);
str = buffer.toString();

const data = str.split("\n").length;
console.log(data);
// learnyounode
