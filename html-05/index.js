const args = require('minimist')(process.argv.slice(2));
const glob = require('glob');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const input = args['input'];
const output = args['output'];

function runScript(scriptPath, args, callback) {

  // keep track of whether callback has been invoked to prevent multiple invocations
  var invoked = false;

  var process = childProcess.exec(scriptPath, args);

  // listen for errors as they may prevent the exit event from firing
  process.on('error', function (err) {
      if (invoked) return;
      invoked = true;
      callback(err);
  });

  // execute the callback once the process has finished running
  process.on('exit', function (code) {
      if (invoked) return;
      invoked = true;
      var err = code === 0 ? null : new Error('exit code ' + code);
      callback(err);
  });

}

glob(input, async (er, files) => {
  if (er) throw er;

  // Now we can run a script and invoke a callback when complete, e.g.
  for( const file of files ) {
    const filename = path.parse(file).name;
    const { stdout, stderr } = await exec(`npm run compile -- ${file} ${path.join(output, filename+'.html')}`);
    console.log(`stdout: ${stdout}`);
  };
});
