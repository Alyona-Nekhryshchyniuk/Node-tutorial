const process = require("process");
const http = require("http");
const bl = require("bl");

// http.get(process.argv[2], (response) => {
//   response.pipe(
//     bl(function (err, data) {
//       if (err) return console.error(err);

//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     })
//   );
// });

http.get(process.argv[2], function (response) {
  response.on("data", function (chunk) {
    let chun = chunk.toString();
    console.log(chun.length);
    console.log(chun);
  });
  //   response.on("end", function () {
  //     // console.log(body.length);
  //     console.log(body);
  //   });
});
