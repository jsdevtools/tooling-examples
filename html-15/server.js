const express = require('express');
const proxy = require('express-http-proxy');
// const https = require('https');
const http = require('http');

const app = express();

const options = {};

app.use(proxy('html-15-fns.jsdevtools.com', {
  proxyReqPathResolver: req => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {   // simulate async
        const [rsrc, queryString] = req.url.split('?');
        const base = rsrc.split('.').length > 1 ? rsrc.split('.').slice(0,-1).join('.') : rsrc;
        var fn = base.slice(1) || 'index';
        var resolvedPathValue = `/.netlify/functions/${fn}${queryString ? '?' + queryString : ''}`;
        resolve(resolvedPathValue);
      }, 200);
    });
  },
  https: true,
  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
    if (proxyRes.statusCode !== 200) userRes.redirect(301, '/');
    return new Promise( resolve => {
        setTimeout( () => {
          resolve(proxyResData);
        }, 200);
      });
  },
}));

http.createServer(options, app).listen(process.env.PORT || 8080);
