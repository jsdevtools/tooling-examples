const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const data = require('../locals.config.js');

const app = express();

const options = {
};

app.set('view engine', 'ejs');
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
