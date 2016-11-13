// var User = require('mongoose').model('User');
// var passport = require('passport');
var User = require('mongoose').model('user');


exports.renderUser = function(req, res) {
	res.render('adduser');
};

exports.addUser = function(req, res) {
	var userInfo = req.body; 
	 if(!userInfo.username || !userInfo.password){
        res.render('show_message_user', {message: "Sorry, you provided worng info", type: "error"});
    }
    else{
        var newUser = new User({
            username: userInfo.username,
            password: userInfo.password
        });
        newUser.save(function(err, docs){
            if(err)
                res.render('show_message_user', {message: "Database error", type: "error"});
            else
                res.render('show_message_user', {message: "New person added", type: "success", user: userInfo});
            
        });
    }
};

// app.delete('/people/:id', function(req, res){
//     Person.findByIdAndRemove(req.params.id, function(err, response){
//         if(err) res.json({message: "Error in deleting record id " + req.params.id});
//         else res.json({message: "Person with id " + req.params.id + " removed."});
//     });
// });

exports.deleteUser = function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, response){
        if(err) res.json({message: "Error in deleting record id " + req.params.id});
        else res.json({message: "Person with id " + req.params.id + " removed."});
    });
};

// app.get('/people', function(req, res){
//     Person.find(function(err, response){
//         res.json(response);
//     });
// });

exports.showuser = function(req, res) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};


// var getErrorMessage = function(err) {
// 	var message = '';
// 	if (err.code) {
// 		switch (err.code) {
// 			case 11000:
// 			case 11001:
// 				message = 'Username already exists';
// 				break;
// 			default:
// 				message = 'Something went wrong';
// 		} 
// 	} else {
// 		for (var errName in err.errors) {
// 			if (err.errors[errName].message) {
// 				message = err.errors[errName].message;
// 			}
// 		}
// 	}
// 	return message;
// };

// exports.create = function(req, res, next) {
// 	var user = new User(req.body);
// 	user.save(function(err) {
// 		if (err) {
// 			return next(err);
// 		} else {
// 			res.json(user);
// 		}
// 	});
// };

// exports.list = function(req, res, next) {
// 	User.find({}, function(err, users) {
// 		if (err) {
// 			return next(err);
// 		} else {
// 			res.json(users);
// 		}
// 	});
// };

// exports.read = function(req, res) {
// 	res.json(req.user);
// };

// exports.update = function(req, res, next) {
// 	User.findOneAndUpdate({username: req.user.username}, req.body,
// 		function(err, user) {
// 			if (err) {
// 				return next(err);
// 			} else {
// 				res.json(user);
// 			}
// 		});
// };

// exports.delete = function(req, res, next) {
// 	req.user.remove(function(err) {
// 		if (err) {
// 			return next(err);
// 		} else {
// 			res.json(req.user);
// 		}
// 	});
// };

// exports.userByUsername = function(req, res ,next, username) {
// 	User.findOne({
// 		username: username
// 	}, function(err, user) {
// 		if (err) {
// 			return next(err);
// 		} else {
// 			req.user = user;	
// 			next();
// 		}
// 	});
// };

// exports.renderSignup = function(req, res) {
// 	if (!req.user) {
// 		res.render('signup', {
// 			title: 'Sign up',
// 			messages: req.flash('error')
// 		});
// 	} else {
// 		return res.redirect('/');
// 	}
// };

// exports.signup = function(req, res, next) {
// 	if (!req.user) {
// 		var user = new User(res.body);
// 		user.provider = 'local';

// 			user.save(function(err) {
// 				if (err) {
// 					var message = getErrorMessage(err);

// 					req.flash('error', message);
// 				return res.redirect('/signup');
// 			}

// 			req.login(user, function(err) {
// 				if (err) return next(err);
// 				return res.redirect('/');
// 			});
// 		});
// 	} else {
// 		// after submit 
// 		return res.redirect('/');
// 	}
// };


// exports.login = function(req, res) {
// 	// console.log(req.body);
// 	// console.log('Email: ' + req.body.email);
// 	// console.log('Password: ' + req.body.password);
// 	req.checkBody('email', 'Invalid email').notEmpty().isEmail();
// 	req.sanitizeBody('email').normalizeEmail();
// 	//เช็คค่า error
// 	var errors = req.validationErrors();
// 	if (errors) {
// 		res.render('index', {
// 			title: 'รูปแบบ email ไม่ถูกต้องห: ' + JSON.stringify(errors),
// 			isLoggedIn: false
// 		});
// 		return;
// 	}
// 	//cookie session
// 	if (req.body.remember === 'remember') {
// 		req.session.remember = true;
// 		req.session.email = req.body.email;
// 	}
// };

// exports.renderLogin = function(req, res) {
// 	if (!req.user) {
// 		res.render('login', {
// 			title: 'Log in',
// 			messages: req.flash('error') || req.flash('into')
// 		});
// 	} else {
// 		return res.redirect('/');
// 	}
// };

// // 	res.render('index', {
// // 		title: 'Logged in as ' + req.body.email,
// // 		isLoggedIn: true
// // 	});
// // };
// exports.logout = function(req, res) {
// 	req.session = null;
// 	res.render('index', {
// 		title: 'See you again later',
// 		isLoggedIn: false
// 	});
// };