const locals = require('./locals.config.js');
var depth = -1;
var iStore = [];

const prep = (o) => (
  Object.entries({
    title: '',
    note: '',
    url: '',
    links: [],
    ...o
  }).reduce((acc, [key, val]) => (
    {
      ...acc,
      [key]: (v => (
        !v
          ? null
          : key === 'links'
            ? v.map( link => (prep(link)) )
            : v
      ))(val),
    }
  ), {})
);

module.exports = {
  topics: Object.keys(locals.topics).reduce( (acc, key) => {
    return {
      ...acc,
      [key]: prep(locals.topics[key]),
    };
  }, {}),
  nav: locals.nav,
  incIndex: () => (++this.i || (this.i = 0)),
  index: () => (this.i),
  incDepth: () => {
    depth++;
    iStore.push(this.i);
    this.i = -1;
    return '';
  },
  decDepth: () => {
    depth--;
    this.i = iStore.pop();
    return '';
  },
  isDeep: () => (depth < 2 ? false : true),
  depth: () => (depth),
}
