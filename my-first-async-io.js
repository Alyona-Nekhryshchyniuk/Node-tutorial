const fs = require("fs");
const process = require("process");
// will execute in the end of all sync code, but before async
process.nextTick(function () {
  console.log("NextTick callback");
});

// shows absolute path to current working directory
console.log(process.cwd());

// error if not passs file path to argument in terminal
// fs.readFile(process.argv[2], (er, fileContent) => {
//   const num = fileContent.toString().split("\n").length - 1;
//   console.log(num);
// });

fs.readFile("./notes/notes.txt", (er, fileContent) => {
  const num = fileContent.toString().split("\n").length - 1;
  console.log(num);
});

// learnyounode
