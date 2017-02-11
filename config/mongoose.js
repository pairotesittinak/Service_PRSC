var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
	mongoose.set('debug', config.debug);
	var db = mongoose.connect(config.mongoUri);

	// require('../app/models/user.model');
	 require('../app/models/test.model');
	// require('../app/models/images.model')
	return db;
};