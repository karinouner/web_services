var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = mongoose.Schema({
serial: Number,
size: Number,
color: String,
gender:String,
type: String
}, {collection: 'items'});

var shoes = mongoose.model('shoes',userSchema);
module.exports = shoes;

