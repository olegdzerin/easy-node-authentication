const app = require('express');
const router = app.Router();

router.get('/login', (req, res) => {
    console.log("req:::"+req.session.showAd)
    res.locals.user = '';
    
   // res.set('text/html');
    res.render('login');
  });

  router.post('/login', (req, res) => {
    console.log(req.body);
    req.session.email = req.body.email
    res.locals.user = req.body.email
    res.render('about');
  });
module.exports = router;