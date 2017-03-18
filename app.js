'use strict';
let express = require('express');
let path = require('path');
//let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let sakesApi = require('./routes/api/sakesApi');
let ocrApi = require('./routes/api/ocrApi');
let glossaryApi = require('./routes/api/glossaryApi');
let shoplistApi = require('./routes/api/shoplistApi');
let breweriesApi = require('./routes/api/breweriesApi');
let screen = require('./routes/screen');
// passport
let twitter = require('./routes/auth/twitter');
let facebook = require('./routes/auth/facebook');
let google = require('./routes/auth/google');
let logout = require('./routes/auth/logout');

let app = express();
// force ssl
let forceSsl = require('force-ssl-heroku');
app.use(forceSsl);

// limit size
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/sakes', sakesApi);
app.use('/api/ocr', ocrApi);
app.use('/api/glossary', glossaryApi);
app.use('/api/shoplist', shoplistApi);
app.use('/api/breweries', breweriesApi);
app.use('/', screen);
// passport
app.use(twitter.session({
  secret: 'itagaki',
  resave: false,
  saveUninitialized: false
}));
app.use(twitter.passport.initialize());
app.use(twitter.passport.session());
app.use('/auth/twitter', twitter.router);
app.use('/auth/facebook', facebook.router);
app.use('/auth/google', google.router);
app.use('/auth/logout', logout);

// catch 404 and forward to error handler
app.use( (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use( (err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use( (err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
