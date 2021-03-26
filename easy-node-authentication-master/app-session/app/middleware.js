
const jwt = require('jsonwebtoken');
const requireAuth = (req, res, next) => {
    if(!req.session.email) {
      res.sendStatus(404)
      // res.locals.user = req.session.email;
      // res.render('about');
    }else{
        next();
    }
  };
  const requireAuthByToken = (req, res, next) => {
    if(!req.cookies.token) {
      res.sendStatus(404)
      // res.locals.user = req.session.email;
      // res.render('about');
    }else{
      jwt.verify(req.cookies.token, 'secret key', function(err, decoded) {
        if(err) return res.sendStatus(404);
        console.log(`decoded.foo::${decoded.foo}`);
         next();
      })

       
    }
  }

  module.exports = {requireAuth, requireAuthByToken};