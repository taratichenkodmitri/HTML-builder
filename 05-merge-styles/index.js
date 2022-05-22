const path = require('path');
const fs = require('fs');

const stylesDirectory = path.join(__dirname, 'styles');
const mergeStyleFile = path.join(__dirname, 'project-dist', 'bundle.css');

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
    console.log(file);
    const readStream = await fs.createReadStream(file, 'utf-8');
    readStream.pipe(writeStream);
  }
}

function isCss(file) {
  return path.extname(file) === '.css' ? true : false;
}

mergeStyles(mergeStyleFile, stylesDirectory);




