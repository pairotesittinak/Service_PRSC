var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-Parser');
var hbs = require('express-handlebars');

// var validator = require('express-validator');
// var cookieSession = require('cookie-session');
// var session = require('express-session');
// var flash = require('connect-flash');
var passport = require('passport');
// var RedisStore = require('connect-redis')(session);
var config = require('./config');
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })



module.exports = function() {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else {
		app.use(compression);
	}

	// app.use(cookieSession({
	// 	name: 'session',
	// 	keys: ['cxzc134rrwfvsc', 'dqdt3fevsc123']
	// }));
	// app.use(session({
	// 	// inherritan file config
	// 	secret: config.sessionSecret,
	// 	resave: false,
	// 	saveUninitialized: true
	// }));
	// app.use(flash());
	// //start passport
	// app.use(passport.initialize());
	// app.use(passport.session());

	// app.use(session({
	// 	store: new RedisStore({
	// 		host: 'localhost',
	// 		port: 6379,
	// 		db: 'my_project',
	// 		pass: '123456'
	// 	});
	// 	secret: 'sdqegr2qd123'
	// }));

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	// app.use(validator());

// // view engine setup
// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/app/views/layouts/'}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

	app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir:  './app/views/layouts/'}));
	// app.engine('hbs', hbs.engine);
	app.set('views', './app/views');
	app.set('view engine', 'hbs');

	// app.set('views', './app/views');
	// app.set('view engine', 'jade');

	// require('../app/routes/index.routes')(app);
	require('../app/routes/user.routes')(app);


	app.use(express.static('./public'));
	return app;
};
