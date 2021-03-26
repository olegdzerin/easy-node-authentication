const { onErrorResumeNext } = require('rxjs'),
      {requireAuth, requireAuthByToken} = require('../middleware');

module.exports = function(app){
const authRouters = require('./authRouters');


      
      app.use(authRouters)      
      app.get('/about', requireAuth, requireAuthByToken, (req,res) => {
        res.render('about', {user: req.session.email});
      }
      );
      
      
      app.get('/', (req, res) => {
        console.log("req:::"+req.session.showAd);
        res.locals.user = '';
       // res.sendStatus(200);
        res.render('index');
      })

     
}