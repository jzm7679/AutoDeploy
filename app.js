var express = require('express');
var http = require('http');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// ********************** start *************************************
var index = require('./routes/index');
var user = require('./routes/user');

var excel_index = require('./routes/excel/index');
var excel_download = require('./routes/excel/download');
var excel_check = require('./routes/excel/check');
var excel_createdb = require('./routes/excel/createdb');
var excel_import = require('./routes/excel/importExcel');
var excel_basedb = require('./routes/excel/basedb');
var excel_success = require('./routes/excel/success');

// ********************** end *************************************

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//注释掉默认的，自己手动修改默认引擎
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
// ************************** start *********************************
app.use('/', index);
app.use('/user', user);

app.use('/excel', excel_index);
app.use('/excel/download', excel_download);
app.use('/excel/check', excel_check);
app.use('/excel/db', excel_createdb);
app.use('/excel/import', excel_import);
app.use('/excel/basedb', excel_basedb);
app.use('/excel/success', excel_success);


// ************************** end *********************************

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(8080);

module.exports = app;