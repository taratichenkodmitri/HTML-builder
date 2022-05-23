const path = require('path');
const copy = require('./copymodule/copy');

const targetDirectory = path.join(__dirname, 'files');
const copyDirectory = path.join(__dirname, 'files-copy');

copy(targetDirectory, copyDirectory);