const args = require('minimist')(process.argv.slice(2));
const glob = require('glob');
const path = require('path');
const exec = require('child_process').execSync;
const input = args['input'];
const output = args['output'];

glob(input, (er, files) => {
  if (er) throw er;

  // Now we can run a script and invoke a callback when complete, e.g.
  for( const file of files ) {
    const filename = path.parse(file).name;
    const result = exec(`npm run compile -- ${file} ${path.join(output, filename+'.html')}`);
    console.log(`compiled: ${file}`);
  };
});
