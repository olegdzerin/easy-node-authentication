
const { render } = require('ejs');
const jws = require('jsonwebtoken');
const {Customer} = require('../models/customers');
const handleError = function(err, req, res){
  if(err) {
    res.redirect('signup',{message: "Введіть коректні дані"});
  }else{
    res.redirect('login')
  }
}
const initSignup = (req, res) => {
    const customers = new Customer({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    customers.save(function(err){
      handleError(err, req,res);
    })
};
const initLogin = (req,res) => {
    Customer.find(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, function(err, doc) {
        if(err) {
          console.log(`err::${err}`);
          res.redirect('login')
      }else{
        if(doc.length > 0) {
         const token = jws.sign({foo: "bar"}, 'secret key');
         res.cookie('token', token);
             req.session.email = req.body.email
        res.locals.user = req.body.email;
        res.redirect('about');
        }else{
            res.redirect('login')
        }
      
      }
        
      })
}
module.exports = {initSignup, initLogin};
