const fs = require('fs');
const { fetchLocals } = require('../fetch-pg');

(async () => {
  const locals = await fetchLocals();
  console.log(JSON.stringify(locals));
  fs.writeFile(
    './locals.config.js',
    `module.exports = ${JSON.stringify(locals, null, 2)}`,
    'utf-8',
    (err) => {
      if (err) throw err;
    }
  );
})();
