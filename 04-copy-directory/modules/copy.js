module.exports = copy;

const path = require('path');
const fs = require('fs');

async function copy(targetDirectory, copyDirectory) {
  await fs.promises.rm(copyDirectory, { recursive: true, force: true });
  await fs.promises.mkdir(copyDirectory, { recursive: true });
  await fs.readdir(targetDirectory, (err, files) => {
    files.forEach(file => {
      fs.copyFile(path.join(targetDirectory, file), path.join(copyDirectory, file), errCallback);
    });
  });
}

function errCallback(err) {
  if (err) throw err;
}