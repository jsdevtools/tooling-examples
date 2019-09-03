const fs = require('fs');
const data = require('./handlebars.config.js');
const outFile = `./handlebars.config.json`;

fs.writeFile(outFile, JSON.stringify(data), 'utf-8', (err) => {
  if (err) throw err;
});
