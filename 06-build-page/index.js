const path = require('path');
const fs = require('fs');
const copy = require('../04-copy-directory/modules/copy');
const mergeStyles = require('../05-merge-styles/modules/mergeStyles');

const projectDist = path.join(__dirname, 'project-dist');
const assetsDir = path.join(__dirname, 'assets');
const projectDistAssets = path.join(__dirname, 'project-dist', 'assets');

const mergeStyleFile = path.join(__dirname, 'project-dist', 'style.css');
const stylesDir = path.join(__dirname, 'styles');

const templateHTML = path.join(__dirname, 'template.html');
const HTMLComponents = path.join(__dirname, 'components');
const HTML = path.join(projectDist, 'index.html');

async function buildPage() {
  await fs.promises.rm(projectDist, { recursive: true, force: true });
  await fs.promises.mkdir(projectDist, { recursive: true });

  fs.readdir(assetsDir, (err, files) => {
    files.forEach(async file => {
      await copy(path.join(assetsDir, file), path.join(projectDistAssets, file));
    });
  });

  mergeStyles(mergeStyleFile, stylesDir);

  mergeHTML(templateHTML, HTMLComponents);
}

async function mergeHTML (templateHTML, HTMLComponents) {
  let template = await fs.promises.readFile(templateHTML,'utf-8');
  const components = await fs.promises.readdir(HTMLComponents);

  for (let i = 0; i < components.length; i++) {
    const pathToHTMLComponent = path.join(HTMLComponents, components[i]);
    const componentCode = await fs.promises.readFile(pathToHTMLComponent, 'utf-8');
    const templateTag = (`{{${components[i].slice(0,-5)}}}`);
    template = template.replace(templateTag, componentCode);
    await fs.promises.writeFile(HTML, template);
  }
}

buildPage();