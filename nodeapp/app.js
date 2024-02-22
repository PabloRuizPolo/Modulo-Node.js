var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middlewares. Cada vez que llega una peticion, responde con esto.

app.locals.title = 'NodeApp';


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //ese path.join es multiplataforma, hace que la ruta se pueda leer en todos los sistemas operativos
//si vas a tener mucho archivos estaticos, puedo usar un servidor web para ello. "apache", "nginex"... son algunos ejemplos.

/*
app.get('/prueba', (req, res, next) => {
  res.send('página de prueba');
  console.log('Petición:', req.hostname);
  next()
})
*/


app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // error de validacion
  if (err.array) {
    const errInfo = err.array({ })[0];
    console.log(errInfo);
    err.message = `Not valid - ${errInfo.type} ${errInfo.path} in ${errInfo.location} ${errInfo.msg}`;
    err.status = 422;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
