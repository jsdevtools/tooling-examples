var increment = function () {};

increment.register = function (Handlebars) {
  Handlebars.registerHelper('increment', function (value) {
    return value + 1;
  });
};

module.exports = increment;

