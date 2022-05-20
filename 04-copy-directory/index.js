const path = require('path');
const fs = require('fs');

const targetDirectory = path.join(__dirname, 'files');
const copyDirectory = path.join(__dirname, 'files-copy');

async function copy(targetDirectory, copyDirectory) {
  await fs.promises.rm(copyDirectory, { recursive: true, force: true });
  await fs.promises.mkdir(copyDirectory, { recursive: true });
  fs.readdir(targetDirectory, (err, files) => {
    files.forEach(file => {
      fs.copyFile(path.join(targetDirectory, file), path.join(copyDirectory, file), errCallback);
    });
  });
}

function errCallback(err) {
  if (err) throw err;
}

copy(targetDirectory, copyDirectory);