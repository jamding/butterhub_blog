var mongoose = require('mongoose');

var Photo = mongoose.model('Photo', {
	name: String,
	path: { type: String, index: {unique: true, dropDups: true}},
	epoch: Number
});

module.exports = Photo;
