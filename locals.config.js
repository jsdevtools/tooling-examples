const topics = require('./locals');
module.exports = {
  topics,
  nav: (({favorites, ...rest}) => ([
    { title: favorites.title, filename: favorites.url },
    ...Object.entries(rest)
      .sort(([a,],[b,],) => (b < a))
      .map(([key,value])=>({ title: value.title, filename: value.url, ext: value.ext })),
  ]))(topics),
}
