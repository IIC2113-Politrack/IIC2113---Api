var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// Routes
var index = require('./api/routes/indexRoutes');
var userRoutes = require('./api/routes/userRoutes');
var commentRoutes = require('./api/routes/commentRoutes');
var proposalRoutes = require('./api/routes/proposalRoutes');
var evidenceRoutes = require('./api/routes/evidenceRoutes');
var organizationRoutes = require('./api/routes/organizationRoutes');

var app = express();

//Set up mongoose connection var dbLocal = "mongodb://127.0.0.1/tarea1";
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongoDB = process.env.MONGO_DB || "mongodb://127.0.0.1/tarea1";
mongoDB = "mongodb://loscabros:123123@ds149324.mlab.com:49324/politrack";

var promise = mongoose.connect(mongoDB, {useMongoClient: true});
promise.then(function (db) {
  var database = mongoose.connection;
  database.on('error', console.error.bind(console, 'MongoDB connection error:'));
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use routes as middleware
app.use('/', index);
userRoutes(app);
commentRoutes(app);
proposalRoutes(app);
evidenceRoutes(app);
organizationRoutes(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req
    .app
    .get('env') === 'development'
    ? err
    : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// User = require('./api/models/userModel');
// Comment = require('./api/models/commentModel');
// Proposal = require('./api/models/proposalModel');
// Evidence = require('./api/models/evidenceModel');
// Organization = require('./api/models/organizationModel');