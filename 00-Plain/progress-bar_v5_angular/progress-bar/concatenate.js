const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/<PROJECT_NAME>/runtime.js',
    './dist/<PROJECT_NAME>/polyfills.js',
    './dist/<PROJECT_NAME>/scripts.js',
    './dist/<PROJECT_NAME>/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/analytics-counter.js');
  await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
  await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()
