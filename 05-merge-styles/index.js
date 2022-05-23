const path = require('path');
const mergeStyles = require('./modules/mergeStyles');

const stylesDirectory = path.join(__dirname, 'styles');
const mergeStyleFile = path.join(__dirname, 'project-dist', 'bundle.css');

mergeStyles(mergeStyleFile, stylesDirectory);

