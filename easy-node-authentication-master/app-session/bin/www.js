const app = require('../server');
var http = require('http');
const mongoose = require('mongoose');
const host = '127.0.0.1'
// const port = normalizePort(process.env.PORT || '3000');
const port = 7000;
const dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/myshop?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then((result) => server.listen(port))
  .then((result) => {
  //  console.log(mongoose1);
    app.listen(port, host, function () {
     console.log(`Server listens http://${host}:${port}`)
   
  })}
  )
  .catch((err) => console.log(err));

//  const Schema = mongoose.Schema;


//module.exports = {mongoose1, exp};




