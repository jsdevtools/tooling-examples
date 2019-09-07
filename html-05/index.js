const args = require('minimist')(process.argv.slice(2));
const glob = require('glob');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const input = args['input'];
const output = args['output'];

glob(input, async (er, files) => {
  if (er) throw er;

  for( const file of files ) {
    const filename = path.parse(file).name;
    const { stdout, stderr } = await exec(`npm run compile -- ${file} ${path.join(output, filename+'.html')}`);
  };
});
