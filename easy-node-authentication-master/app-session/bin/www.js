const app = require('../server');
var http = require('http');
var mongoose = require('mongoose');
const host = '127.0.0.1'
// const port = normalizePort(process.env.PORT || '3000');
const port = 7000;
const dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/sample-mfix?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then((result) => server.listen(port))
  .then((result) => app.listen(port, host, function () {
     console.log(`Server listens http://${host}:${port}`)
   // console.log(process.env);
  }))
  .catch((err) => console.log(err));

