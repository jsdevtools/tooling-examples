const express = require('express');
const nunjucks = require('nunjucks');
const https = require('https');
const http = require('http');
const path = require('path');
const data = require('../locals.config.js');

const app = express();

const options = {
};

app.engine('njk', nunjucks.render);
app.set('view engine', 'njk');
const njk = nunjucks.configure(['dist/'], {
  autoescape: true,
  express: app,
});

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
