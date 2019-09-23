const express = require('express');
// const https = require('https');
const http = require('http');
const app = express();
const locals = require('../locals.config.js');
const options = {};

app.get('/nav', (_, res) => {
  res.json(locals.nav);
});

app.get('/topics', (_, res) => {
  res.json(locals.topics);
});

app.get('/topics/:topic', (req, res, next) => {
  const [rsrc,] = req.params.topic.split('?');
  const base = rsrc.split('.').length > 1 ? rsrc.split('.').slice(0,-1).join('.') : rsrc;
  const match = Object.keys(locals.topics).filter( topic => (topic === base) );
  if (match.length) {
    res.send(locals.topics[match[0]]);
  } else {
    next('topic not found');
  }
});

app.get('*', (_req, _res, next) => {
  next('resource not found');
});

app.use( (err, _req, res, next) => {
  res.status(404).json({ error: err });
  next(err);
});

http.createServer(options, app).listen(process.env.PORT || 8080);
