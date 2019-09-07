const args = require('minimist')(process.argv.slice(2));
const glob = require('glob');
const path = require('path');
const exec = require('child_process').exec;
const input = args['input'];
const output = args['output'];

glob(input, (er, files) => {
  if (er) throw er;

  function execP(cmd) {
    return new Promise(function(resolve, reject) {
        exec(cmd, function(err, stdout, stderr) {
            if (err) {
                reject(err);
            } else {
                resolve({stdout, stderr});
            }
        });
    });
  }

  Promise.all(files.map( (file) => {
    const filename = path.parse(file).name;
    return execP(`npm run compile -- ${file} ${path.join(output, filename+'.html')}`)
      .then( data => {
        return `${data.stdout}`;
      });
  })).then(function(results) {
    // process output here
    var output = results.join('');
    console.log(output);
  }, function(err) {
      // process error here
      if (err)
        throw err;
  });

  // Now we can run a script and invoke a callback when complete, e.g.
  /*
  for( const file of files ) {
    const filename = path.parse(file).name;
    const result = exec(`npm run compile -- ${file} ${path.join(output, filename+'.html')}`);
    console.log(`compiled: ${file}`);
  };
  */
});
