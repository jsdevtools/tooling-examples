const fs = require('fs');
const { fetchTopics, fetchNav } = require('fetch-graphql');

const config = {
  dataSource: 'PG',
  // uri: 'http://localhost:4000',
  uri: 'https://html-api-graphql.jsdevtools.com',
};

(async () => {
  const topics = await fetchTopics(config);
  const nav = await fetchNav(config);

  console.log(JSON.stringify({topics, nav}));
  fs.writeFile(
    './locals.config.js',
    `module.exports = ${JSON.stringify({topics, nav}, null, 2)}`,
    'utf-8',
    (err) => {
      if (err) throw err;
    }
  );
})();
