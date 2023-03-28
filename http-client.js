const process = require("process");
const http = require("http");

http.get(process.argv[2], (responseBuffer) => {
  responseBuffer.setEncoding("utf8");

  responseBuffer.on("data", (chunk) => {
    console.log(chunk);
  });
});
