const fs = require("fs");
const path = require("path");
const process = require("process");

//                                               Expected process.argv arguments: "/path/to/dir/" 'txt';
const [, , dirPath, ext] = process.argv;
fs.readdir(dirPath, (err, list) => {
  filesArr = list.toString().split(",");

  const filteredList = filesArr.filter((fileName) => {
    listFileExt = path.extname(fileName);
    if (ext && !listFileExt) {
      return false;
    } else if (ext && listFileExt) {
      return listFileExt.slice(1) === ext;
    } else if (!ext) {
      return listFileExt === ext;
    }
  });

  return filteredList.forEach((el) => console.log(el));
});
