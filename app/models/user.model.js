var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var crypto = require('crypto');

// var UserSchema = new Schema({
// 	firstName: String,
// 	lastName: String,
// 	username: {
// 		type: String, 
// 		unique: true, 
// 		trim: true, 
// 		required: 'Username is require'
// 	},
// 	// username: String,
// 	emai: {
// 		type: String, 
// 		index: true
// 	},
// 	password: {
// 		type: String,
// 		validate: [
// 			function(password) {
// 				return password && password.length >= 6;
// 			},
// 			'ต้องมี Password อย่างน้อย 6 ตัวอักษร'
// 		]
// 	},
// 	salt: {
// 		type: String
// 	},
// 	provider: {
// 		type: String,
// 		require: 'Provider is require'
// 	},
// 	providerId: String,
// 	providerData: {},
// 	// role: {
// 	// 	type: String,
// 	// 	enum: ['Admin', 'Owner', 'User'],
// 	// },
// 	created: {
// 		type: Date,
// 		default: Date.now
// 	}
// });

// 	UserSchema.pre('save', function(next) {
// 		if (this.password) {
// 			this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
// 			this.password = this.hashPassword(this.password);
// 		}
// 		next();
// 	});
// 	//create hash password
// 	UserSchema.method.hashPassword = function(password) {
// 		return crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('base64');
// 	};

// 	UserSchema.method.authenticate = function(password) {
// 		return this.password === this.hashPassword(password);
// 	};


	// var UserSchema = new Schema({
	// 	firstName: String,
	// 	lastName: String,
	// 	username: String,
	// 	emai: String,
	// 	password: String

	// });
var userSchema = mongoose.Schema({
    username: String,
    password: String
});

mongoose.model('user', userSchema)
// mongoose.model('User', UserSchema);