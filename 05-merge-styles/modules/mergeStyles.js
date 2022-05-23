module.exports = mergeStyles;

const path = require('path');
const fs = require('fs');

async function mergeStyles(mergeStyleFile, stylesDirectory) {
  await fs.promises.rm(mergeStyleFile, { recursive: true, force: true });
  const files = await fs.promises.readdir(stylesDirectory);
  const writeStream = fs.createWriteStream(mergeStyleFile);

  files.forEach(file => {
    mergeStyle(path.join(stylesDirectory, file), writeStream);
  });
}

async function mergeStyle(file, writeStream) {
  if (isCss(file)) {
    const readStream = await fs.createReadStream(file, 'utf-8');
    readStream.pipe(writeStream);
  }
}

function isCss(file) {
  return path.extname(file) === '.css' ? true : false;
}