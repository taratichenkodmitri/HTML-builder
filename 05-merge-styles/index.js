const path = require('path');

const moduleMergeStyles = path.join(__dirname, 'modules', 'mergeStyles');
const mergeStyles = require(moduleMergeStyles);

const stylesDirectory = path.join(__dirname, 'styles');
const mergeStyleFile = path.join(__dirname, 'project-dist', 'bundle.css');

mergeStyles(mergeStyleFile, stylesDirectory);

