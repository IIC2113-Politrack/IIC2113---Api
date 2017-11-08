let express = require('express')
let cors = require('cors')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let scripts = require('./bin/scripts')

// Routes
let indexRouter = require('./api/routes/indexRoutes')
let usersRouter = require('./api/routes/userRoutes')
let commentsRouter = require('./api/routes/commentRoutes')
let proposalsRouter = require('./api/routes/proposalRoutes')
let evidencesRouter = require('./api/routes/evidenceRoutes')
let organizationsRouter = require('./api/routes/organizationRoutes')
let politiciansRouter = require('./api/routes/politicianRoutes')
let commitmentsRouter = require('./api/routes/commitmentRoutes')
let app = express()

//Set up mongoose connection
let mongoose = require('mongoose')
mongoose.Promise = global.Promise
let mongoDB = process.env.MONGODB_URI || "mongodb://localhost/politrap"

mongoose.connect(mongoDB, {useMongoClient: true})

mongoose
  .connection
  .on('error', function () {
    console.log('Mongoose default connection error: ' + err)
    if (err.message.code === 'ETIMEDOUT') {
      console.log(err)
      mongoose.connect(config.db.uri, opts)
    }
  })

mongoose
  .connection
  .on('connected', function () {
    console.log('Mongoose default connection open to ' + mongoDB)
    // console.log("starting scripts")
    // // POPULATE THE DATABASE scripts.loadPoliticians()   .then(() => {
    // scripts.loadProposals(15)       .then(() => {
    // scripts.assignProposalsToPoliticians()       })   })   .catch((err) => {
    // console.log(err)   })
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Enable All CORS Requests
app.use(cors())

// use routes as middleware
app.use('/', indexRouter)
app.use('/api/comments', commentsRouter)
app.use('/api/evidences', evidencesRouter)
app.use('/api/organizations', organizationsRouter)
app.use('/api/proposals', proposalsRouter)
app.use('/api/users', usersRouter)
app.use('/api/politicians', politiciansRouter)
app.use('/api/commitments', commitmentsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req
    .app
    .get('env') === 'development'
    ? err
    : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app