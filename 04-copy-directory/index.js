const path = require('path');
const copy = require('./modules/copy');

const targetDirectory = path.join(__dirname, 'files');
const copyDirectory = path.join(__dirname, 'files-copy');

copy(targetDirectory, copyDirectory);