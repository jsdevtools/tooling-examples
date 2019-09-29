const axios = require('axios');

module.exports.fetchLocals = async () => {
  try {
    const response = await axios.get('/locals', {
      baseURL: 'https://html-api-pg.jsdevtools.com',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
