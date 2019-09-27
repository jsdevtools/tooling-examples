const axios = require('axios');
const fs = require('fs');

const fetchNav = async () => {
  try {
    const response = await axios.get('/nav', {
      baseURL: 'https://html-api-file.jsdevtools.com',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const fetchTopics = async () => {
  try {
    const response = await axios.get('/topics', {
      baseURL: 'https://html-api-file.jsdevtools.com',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

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
