'use strict';

const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const data = require('../../locals.config.js');
const app = express();

app.engine('etr', require('./etr.js')());
app.set('view engine', 'etr');
const someDir = path.join(process.cwd(), 'src', 'templates');
app.set('views', someDir);

app.get('/*', function(req, res) {
  const parts = path.parse(req.params[0]);
  res.render(`${parts.name}${parts.ext}`.split('.').join('-'), data);
});

module.exports.handler = serverless(app);
