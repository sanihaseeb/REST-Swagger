var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var patientsRouter = require('./routes/patients');
var doctorsRouter = require('./routes/doctors');
var visitsRouter = require('./routes/visits');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/visits', visitsRouter);

const expressSwaggerGenerator = require('express-swagger-generator');
const port = 4000;
const host = `localhost:${port}`;
const basePath = '/'; // The forward slash is important!

// Options for the Swagger generator tool
const options = {
  // The root document object for the API specification
  // More info here: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schema
  swaggerDefinition: {
    info: {
      title: 'Health Insurance API',
      description: 'This is Web service for patients, doctors and visits.',
      version: '1.0.0',
    },
    host: host,
    basePath: basePath,
    produces: [
      "application/json"
    ],
    schemes: ['http', 'https']
  },
  basedir: __dirname, // Absolute path to the app
  files: ['./routes/**/*.js'] // Relative path to the API routes folder to find the documentation
};

// Initialize express-swagger-generator and inject it into the express app
expressSwaggerGenerator(app)(options);


module.exports = app;
