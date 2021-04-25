var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
mongoose.model('users', UserSchema);
module.exports = mongoose.model('users');