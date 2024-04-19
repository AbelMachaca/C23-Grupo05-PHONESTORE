var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

// APIS
const apiUser = require('./routes/api/apiUserRoutes');

const apiProducts=require('./routes/api/apiProductosRouters.js')

const rememberMe = require("./middleware/rememberMeValidator.js")
/*const cookieGenerate=require("./middleware/cookiesGenerate.js")*/
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


app.use(session({
  secret: 'phonestore2.0',
  resave: false,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  console.log('Cookies:', req.cookies);
  next();
});
/*app.use(cookieGenerate)*/
app.use(rememberMe)


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

//APIS
app.use('/api', apiUser);
app.use('/api', apiProducts)


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
