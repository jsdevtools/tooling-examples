const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const data = require('../locals.config.js');

const app = express();

const options = {
};

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', __dirname + '/dist');

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
