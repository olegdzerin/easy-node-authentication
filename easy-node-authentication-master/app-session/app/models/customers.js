const mongoose = require('mongoose');
const dbURI = "mongodb+srv://olegdzerin:moskva3504@cluster0.8sbw5.mongodb.net/myshop?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
const { Schema } = require('mongoose');
const customersSchema = new Schema({
    name: String,
    email: String,
    password: String
  });
const Customer = mongoose.model('Customer', customersSchema);

module.exports = {Customer};