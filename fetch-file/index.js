const axios = require('axios');

module.exports.fetchNav = async () => {
  try {
    const response = await axios.get('/nav', {
      baseURL: 'https://html-api-file.jsdevtools.com',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports.fetchTopics = async () => {
  try {
    const response = await axios.get('/topics', {
      baseURL: 'https://html-api-file.jsdevtools.com',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
