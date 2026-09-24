const fs = require('fs');
const path = require('path');

function readJsonData(fileName) {
  const filePath = path.join(__dirname, '..', 'data', fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = { readJsonData };