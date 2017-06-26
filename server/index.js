/* eslint-disable no-console */
require('babel-register');
require('babel-polyfill');

const _ = require('lodash');
const moment = require('moment');
const express = require('express');
const flash = require('express-flash');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const dotenv = require('dotenv');
const logger = require('morgan');
const chalk = require('chalk');

const path = require('path');
const multer = require('multer');

const upload = multer({ dest: path.join(__dirname, 'uploads') });

dotenv.load({ path: '.env' });

const postController = require('./controllers/post');

/**
 * Create Express server.
 */
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(compression());
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CIC-Content-Type');
  next();
};

app.use(allowCrossDomain);

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
}));

app.use(flash());
app.use(logger('dev'));

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});


const contentDeliveryAuthentication = (req, res, next) => {
  const token = _.replace(req.get('Authorization'), 'Bearer ', '');
  if (token !== '') {
    console.log('token', token);
  }
  next();
};

const apiPrefix = '/api/v1';

app.get(`${apiPrefix}/posts`, postController.queryPosts);
app.post(`${apiPrefix}/posts`, postController.createPost);


/**
 * CIC App codebase: WEBUI
 */
// app.use(express.static(path.join(__dirname, 'webui')));
/*
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'webui', 'index.html'));
});*/

/**
 * Start Express server.
 */

app.listen(app.get('port'), () => {
  console.log('%s CICAPP service is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});


module.exports = app;
