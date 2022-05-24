const path =require('path');
const fs = require('fs');
const { stdout } = process;

const targetDir = path.join(__dirname, 'secret-folder');

const showStatisticDir = (pathToDir) => {
  fs.readdir(pathToDir, (err, files) => {
    files.forEach(file => showStatisticDirHelper(pathToDir, file));
  });
};

const showStatisticDirHelper = (pathToDir, file) => {
  let currentPath = path.join(pathToDir, file);
  fs.stat(currentPath, (err, stats) => {
    if (stats.isFile()) {
      stdout.write(showStatisticFile(currentPath, stats));
    } /*else {
      showStatisticDir(path.join(pathToDir, file));
    } */
  });
};

const showStatisticFile = (pathToFile, stats) => {
  let ext = path.extname(pathToFile) ?  ' - ' + path.extname(pathToFile) : '';
  let size = stats.size / 1000 + 'kb';
  return path.parse(pathToFile).name + ext + ' - ' + size + '\n';
};

showStatisticDir(targetDir);
