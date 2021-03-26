const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  path = require('path'),
  cookieParser = require('cookie-parser');
  //routes = require('./app/routes/mainRoutes');

  app.set('view engine', 'ejs'); 
  app.use(cookieParser('secret key'));
app.use(express.static(path.join(__dirname, 'public')));





app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.use(
  session({
    secret: 'secret key',
    saveUninitialized: true,
    cookie: { 
      path: '/', 
      httpOnly: false, 
      secure: false, 
      maxAge: null }
  })
)

 require('./app/routes/mainRoutes')(app);
 
  module.exports = app;
