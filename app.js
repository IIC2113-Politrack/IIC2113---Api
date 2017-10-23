var express = require('express');
var cors = require('cors')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// Routes
var indexRouter = require('./api/routes/indexRoutes');
var usersRouter = require('./api/routes/userRoutes');
var commentsRouter = require('./api/routes/commentRoutes');
var proposalsRouter = require('./api/routes/proposalRoutes');
var evidencesRouter = require('./api/routes/evidenceRoutes');
var organizationsRouter = require('./api/routes/organizationRoutes');
var politiciansRouter = require('./api/routes/politicianRoutes');

var app = express();

//Set up mongoose connection var dbLocal = "mongodb://127.0.0.1/tarea1";
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// var mongoDB = process.env.MONGO_DB || "mongodb://127.0.0.1/tarea1";
// var mongoDB = "mongodb://loscabros:123123@ds149324.mlab.com:49324/politrack";
var mongoDB = "mongodb://vicente:123123@ds229295.mlab.com:29295/politrap";

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
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable All CORS Requests
app.use(cors())

// use routes as middleware
app.use('/', indexRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/evidences', evidencesRouter);
app.use('/api/organizations', organizationsRouter);
app.use('/api/proposals', proposalsRouter);
app.use('/api/users', usersRouter);
app.use('/api/politicians', politiciansRouter);


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