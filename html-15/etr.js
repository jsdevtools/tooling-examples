const path = require('path');

module.exports = () => {
  require.context('./templates', false, /\.etr$/);
  return (filepath, options, callback) => {
    try {
      const results = require(`./templates/${path.parse(filepath).name}.etr`)(options);
      callback(null, results);
    } catch (err) {
      callback(err, null);
    }
  };
};
