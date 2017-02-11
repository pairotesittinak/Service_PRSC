// var user = require('../controllers/user.controller');
// var passport = require('passport');
// TEST ADD AND DELETE
var user = require('../controllers/test.controller');

module.exports = function (app) {


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
            .get(user.showJson);
        // app.route('/upload')
        //     .post(user.uploadImage);

        app.route('/upload/:filename')
        .get(user.read);
  
  
         app.route('/upload')
         .post(user.create);


};

