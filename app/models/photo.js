var mongoose = require('mongoose');

var Photo = mongoose.model('Photo', {
	name: String,
	path: String,
	epoch: Number
});

module.exports = Photo;
