const { onErrorResumeNext } = require('rxjs');

module.exports = function(app){
const authRouters = require('./authRouters');

const requireAuth = (req, res, next) => {
  if(!req.session.email) {
    res.sendStatus(404)
    // res.locals.user = req.session.email;
    // res.render('about');
  }
    next();
}
      
      app.use(authRouters)      
      app.get('/about', requireAuth, (req,res) => {
        res.render('about');
      }
        // if(req.session.email) {
        //   res.locals.user = req.session.email;
        //   res.render('about');
        // }else{
        //   res.sendStatus(404)
          
        // }
      );
      
      
      app.get('/', (req, res) => {
        console.log("req:::"+req.session.showAd);
        res.locals.user = '';
       // res.sendStatus(200);
        res.render('index');
      })

     
}