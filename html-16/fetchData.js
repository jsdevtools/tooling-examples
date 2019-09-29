const fs = require('fs');
const { fetchNav, fetchTopics } = require('../fetch-file');

(async () => {
  const nav = await fetchNav();
  const topics = await fetchTopics();
  console.log(JSON.stringify({ topics, nav }));
  fs.writeFile(
    './locals.config.js',
    `module.exports = ${JSON.stringify({ topics, nav }, null, 2)}`,
    'utf-8',
    (err) => {
      if (err) throw err;
    }
  );
})();
