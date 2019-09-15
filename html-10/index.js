const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const data = require('../locals.config.js');

const helpers = {
  ifCond: require('./dist/helpers/ifCond.js').helper,
  increment: require('./dist/helpers/increment.js').helper,
};

const app = express();

const options = {
};

app.engine('hbs', require('express-handlebars')({
  extname: '.hbs', defaultLayout: null, partialsDir: 'dist/partials/', helpers}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'dist'));

app.get('/', function(req, res) {
  console.log(JSON.stringify(req.url));
  res.redirect('/index.html');
});

app.get('/*.html', function(req, res) {
  console.log(JSON.stringify(req.url));
  const parts = path.parse(req.url);
  res.render(parts.name, data);
});

http.createServer(options, app).listen(process.env.PORT || 8080);
