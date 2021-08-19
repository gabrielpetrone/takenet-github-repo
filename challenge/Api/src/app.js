const express = require('express');
const app = express();
const router = express.Router();

// Index da Rota
const index = require('./routes/index');
const githubRoute = require('../src/routes/githubRoute');

app.all('*', function(req, res, next) {
   var origin = req.get('origin'); 
   res.header('Access-Control-Allow-Origin', origin);
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
});

app.use('/', index);
app.use('/v1', githubRoute);

module.exports = app;