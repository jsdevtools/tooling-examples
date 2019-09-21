const locals = require('../locals.config.js');

module.exports = {
  ...locals,
  nav: (nav => (
    nav.map( n => ({
      ...n,
      ext: '',
    }))
  ))(locals.nav),
}
