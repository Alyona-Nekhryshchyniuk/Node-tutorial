const fs = require("fs");
const path = require("path");
const process = require("process");

//                                               Expected process.argv arguments: "/path/to/dir/" 'txt';

function formfileListByExt(dirPath, ext, callbackFn) {
  fs.readdir(
    dirPath,

    (err, list) => {
      if (err) {
        callbackFn(err);
        return;
      }
      let arr = [];
      list.forEach((fileName) => {
        listFileExt = path.extname(fileName).slice(1);
        if (listFileExt && listFileExt === ext) {
          arr.push(fileName);
        }
      });

      return callbackFn(null, arr);
    }
  );
}
module.exports = formfileListByExt;
