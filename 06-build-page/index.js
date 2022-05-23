const path = require('path');
const fs = require('fs');
const copy = require('../04-copy-directory/modules/copy');

const projectDist = path.join(__dirname, 'project-dist');
const assetsDir = path.join(__dirname, 'assets');
const projectDistAssets = path.join(__dirname, 'project-dist', 'assets');

async function buildHTML() {
  await fs.promises.rm(projectDist, { recursive: true, force: true });
  await fs.promises.mkdir(projectDist, { recursive: true });

  await fs.readdir(assetsDir, (err, files) => {
    files.forEach(async file => {
      await copy(path.join(assetsDir, file), path.join(projectDistAssets, file));
    });
  });
}

buildHTML();