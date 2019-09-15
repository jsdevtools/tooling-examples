var increment = function () {};

increment.register = function (Handlebars) {
  const fn = (value) => {
    return value + 1;
  }

  if (Handlebars) {
    Handlebars.registerHelper('increment', fn);
  } else {
    return fn;
  }
};

increment.helper = increment.register(null);

module.exports = increment;
