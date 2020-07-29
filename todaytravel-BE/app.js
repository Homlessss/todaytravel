const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// const createError = require('http-errors');

var userRouter = require('./server/api/routes/user.router');
var carRouter = require('./server/api/routes/car.router');
var customerRouter = require('./server/api/routes/customer.router');
var config = require('./config/index');

var PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');

mongoose.connect(config.CONNECTSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});8

app.set('view engine', 'ejs');
app.set('views', './views/partials');

app.use(bodyParser.json());
app.use('/api/user', userRouter);
app.use('/api/car', carRouter);
app.use('/api/customer', customerRouter);

app.use('/assets', express.static('assets'));
app.use('/img', express.static('img'));
app.get('/', (req, res) => res.render('login'));

// app.use(function (req, res, next) {
//     next(createError(404));
// });

// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(PORT, () => console.log('Server listening on port ' + PORT));