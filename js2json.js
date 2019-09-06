const args = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const data = require(args['input']);
const output = args['output'];

fs.writeFile(output, JSON.stringify(data, null, 2), 'utf-8', (err) => {
  if (err) throw err;
});
