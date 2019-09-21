'use strict';

const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const data = require('../../locals.config.js');
const app = express();

// app.engine('etr', require('./etr.js')());
// app.set('view engine', 'etr');
// const someDir = path.join(process.cwd(), 'src', 'templates');
// app.set('views', someDir);
const render = require('../etr.js')();

app.get('*', (req, res) => {
  const {name, ext} = path.parse(req.params[0]);
  render(`${name}${ext}`, data, (err, result) => {
    if (err) {
      res.status(500).send(JSON.stringify(err));
    } else {
      res.status(200).send(result);
    }
  });
  //res.render(`${parts.name}${parts.ext}`.split('.').join('-'), data);
});

module.exports.handler = serverless(app);
