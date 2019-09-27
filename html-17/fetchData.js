const axios = require('axios');
const fs = require('fs');

const fetchLocals = async () => {
  try {
    const response = await axios.get('/locals', {
      baseURL: 'https://html-api-pg.jsdevtools.com',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

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
