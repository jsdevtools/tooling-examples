const express = require('express');
// const https = require('https');
const http = require('http');

const app = express();

const options = {
};

app.get('/', function(req, res) {
  res.redirect('/index');
});

http.createServer(options, app).listen(process.env.PORT || 8080);
