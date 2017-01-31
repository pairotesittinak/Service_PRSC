// var user = require('../controllers/user.controller');
// var passport = require('passport');
// TEST ADD AND DELETE
var user = require('../controllers/test.controller');
// var multer  = require('multer');

// var upload =  multer({
//     dest    : './uploads',
//     onError : function(err, next) {
//       console.log('error', err);
//       next(err);
//     }
//   });
// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + '-' + Date.now());
//   }
// });
// var upload = multer({ storage : storage }).array('userPhoto',2);

// var express = require('express');

module.exports = function (app) {
///////////////////////////////////////////////////////////////////////////////
  /////////////////
  // custom methods
  /////////////////
	// app.route('/')
	// 	.get(user.home);
// ///////////////////////////////////////////////////////////////////////////////


// 	app.route('/upload', upload.any())
// 		.post(user.create);

        app.route('/insert')
  // .get(user.renderPerson)
            .post(user.insert);
        app.route('/')
            .get(user.show);

        app.route('/delete')
            .post(user.delete);
        app.route('/showJson')
            .get(user.showJson)


};
// module.exports = function(app) {
// 	app.route('/')
// 		.get(user.home);
//   // router.get('/images/:image_id',  image.index);
//   // router.post('/images', upload.single('file'), user.create);

//   app.route('/upload', upload.single('photo'))
// 	.post(user.create);
//   // router.post('/images/:image_id/like', image.like);
//   // router.post('/images/:image_id/comment', image.comment);
//   // app.use(router);
// };


// module.exports = function(app) {

// // // 	// /* GET home page. */
// // 	app.route('/')
// // 		.get(user.home);


// // 	// app.post('/products')	
// // 	// 	.post(user.pt);

// // 	app.route('/products', upload.any())
// // 		.post(user.pt);

// app.get('/', function(req, res, next) {
// 	res.render('test', {title: 'Express'})
// });

// app.post('/', upload.single("avatar"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   console.log(req.files);
//   console.log(req.body);
//   // res.status().end()
// })
// 	// app.post('/upload', upload.single('foo'), function(req, res) {
// 	//   if (req.file) {
// 	//     console.dir(req.file);
// 	//     return res.end('Thank you for the file');
// 	//   }
// 	//   res.end('Missing file');
// 	// });

// 	// app.route('/signup')
// 	// 	.get(user.renderSignup)
// 	// 	.post(user.signup);

// 	// // app.post('/login', user.login);
// 	// app.route('/login')
// 	// 	.get(user.renderLogin);
// 	// app.post('/logout', user.logout);

// 	// using
// 	// app.route('/adduser')
// 	// 	.get(user.renderUser)
// 	// 	.post(user.addUser);

// 	// app.route('/showuser')
// 	// 	.get(user.showuser);

// 	// app.route('/delete/:username')
// 	// 	.delete(user.deleteUser);




// 	// TEST ADD AND DELETE Attribute

// 	// app.route('/insert')
// 	// 	.get(user.renderPerson)
// 	// 	.post(user.addPerson);
// 	// app.route('/person/show')
// 	// 	.get(user.showperson);







// 	// res.render('mytable', {
//  //    items: items
// 	// });
// 	// app.route('/peroson/delete')
// 	// 	.get(user.deletePerson);




// // 	// /* GET home page. */
// // 	app.route('/')
// // 		.get(user.home);

// // // TEST
// // 	app.route('/insert')
// // 		.post(user.insert);
// // 	app.route('/show')
// // 		.get(user.getPerson);
// // 	app.route('/delete')
// // 		.post(user.deletePerson);
// // 	app.route('/update')
// // 		.post(user.updatePerson);


// 	// app.route('/user')
// 	// 	.post(user.create)
// 	// 	.get(user.list);
// 	// app.route('/user/:username')
// 	// 	.get(user.read)
// 	// 	.put(user.update)
// 	// 	.delete(user.delete);
// 	// app.param('username', user.userByUsername);


	
// 	// app.get('/oauth/facebook', passport.authenticate('facebook', {
// 	// 	failureRedirect: '/login'
// 	// }));
// 	// app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
// 	// 	failureRedirect: 'login',
// 	// 	successRedirect: '/'
// 	// }));
// };