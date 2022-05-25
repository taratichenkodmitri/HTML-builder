const path = require('path');

const moduleCopy = path.join(__dirname, 'modules', 'copy');
const copy = require(moduleCopy);

const targetDirectory = path.join(__dirname, 'files');
const copyDirectory = path.join(__dirname, 'files-copy');

copy(targetDirectory, copyDirectory);