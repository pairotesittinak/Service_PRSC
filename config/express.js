var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-Parser');
var hbs = require('express-handlebars');
var busboyBodyParser = require('busboy-body-parser');
// var validator = require('express-validator');
// var cookieSession = require('cookie-session');
// var session = require('express-session');
// var flash = require('connect-flash');
var passport = require('passport');
// var RedisStore = require('connect-redis')(session);
var config = require('./config');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



module.exports = function() {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else {
		app.use(compression);
	}


	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	// app.use(validator());
	app.use(busboyBodyParser());
// // view engine setup
// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/app/views/layouts/'}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

	app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir:  './app/views/layouts/'}));
	// app.engine('hbs', hbs.engine);
	app.set('views', './app/views');
	app.set('view engine', 'hbs');

	
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});

	// app.set('views', './app/views');
	// app.set('view engine', 'jade');

	// require('../app/routes/index.routes')(app);
	require('../app/routes/user.routes')(app);


	app.use(express.static('./public'));
	return app;
};
