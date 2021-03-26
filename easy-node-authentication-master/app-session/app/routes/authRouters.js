const app = require('express');
const {mongoose} = require('../models/customers')
const router = app.Router();
const {initSignup, initLogin} = require('../controllers/authRouterController');

router.get('/login', (req, res) => {
    res.locals.user = '';
    res.render('login');
  });

  router.post('/login', (req, res) => {
    initLogin(req,res);
  });

  router.get('/logout', (req, res) => {
    req.session.email = undefined;
   // res.locals.user = '';
    res.redirect('/');
  });
  router.get('/signup', (req, res) => {
    res.locals.user = '';
    res.locals.message = '';
   res.render('signup');
   
  });

  router.post('/signup', (req, res) => {
    console.log(req.body);
    req.session.email = req.body.email
    res.locals.user = req.body.email
    
    initSignup(req, res);
  });




module.exports = router;