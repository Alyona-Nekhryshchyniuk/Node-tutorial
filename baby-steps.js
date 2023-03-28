const process = require("process");

const arr = process.argv;
let result = 0;
for (let i = 2; i <= arr.length - 1; i += 1) {
  result = result + Number(arr[i]);
}
console.log(result);
