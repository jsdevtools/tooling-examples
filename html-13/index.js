const express = require('express');
//const enj = require('express-nunjucks');
const nunjucks = require('nunjucks');
const https = require('https');
const http = require('http');
const path = require('path');
const data = require('../locals.config.js');

const app = express();

const options = {
};

//const njk = enj(app, {});
//app.set('view engine', 'nunjucks');
app.engine('njk', nunjucks.render);
app.set('view engine', 'njk');
const njk = nunjucks.configure(['dist/'], {
  autoescape: true,
  express: app,
});
//app.set('views', path.join(__dirname, 'dist'));

app.get('/', function(req, res) {
  console.log(JSON.stringify(req.url));
  res.redirect('/index.html');
});

app.get('/*.html', function(req, res) {
  console.log(JSON.stringify(req.url));
  const parts = path.parse(req.url);
  res.render(parts.name, data);
});

http.createServer(options, app).listen(3000);
