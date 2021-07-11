var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var app = express();
const basicAuth = require('express-basic-auth');
var indexRouter = require('./routes/index');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)


app.use(basicAuth({
  users: { 'admin': 'admin123!' },
  challenge: true
}))

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', indexRouter);


module.exports = app;