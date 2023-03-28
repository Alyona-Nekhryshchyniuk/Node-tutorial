const process = require("process");
const http = require("http");
const bl = require("bl");
const [, , url1, url2, url3] = process.argv;

http.get(url1, url2, url3, (response) => {
  //   response.pipe(
  //     bl(function (err, data) {
  //       if (err) return console.error(err);

  //       data = data.toString();

  //       console.log(data);
  //     })
  //   );
let body = ''
  response.on("data", function (chunk) {
    let chun = chunk.toString();
    body += chun;
    // console.log(chun);
  });

  response.on("end", function () {
    console.log("the end");
  });
});
