const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    name: String,
    country: String,
    city: String,
    address: String,
    phoneno: Number,
    email: String,
    password: String,

})

const UsersModel = mongoose.model("Users", Users)
module.exports = UsersModel;