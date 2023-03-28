const formfileListByExt = require("./mymodule");

const [, , dirPath, ext] = process.argv;

const errorHandle = (err, data) => {
  if (err) {
    return console.log(err);
  }

  data.forEach((fileName) => {
    return console.log(fileName);
  });
};

formfileListByExt(dirPath, ext, errorHandle);
