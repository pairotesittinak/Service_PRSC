// var User = require('mongoose').model('user');
var News = require('mongoose').model('newss');
var Filess = require('mongoose').model('File');
var User = require('mongoose').model('Users');

var fs = require('fs');
var mongoose = require('mongoose'),
    _ = require('lodash');
 
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);
 
exports.create = function(req, res) {
      // var  dateTime = new Date();
      // var item = {
      //   title: req.body.title,
      //   group_id: req.body.group_id,
      //   author: req.body.author,
      //   description: req.body.description,
      // // var  date = new Date();
      //   date: dateTime
      // };
var part = req.files.filefield;

var item = {
  urlImage: "http://"+"localhost:3000/upload/" + part.name
};
      var data = new Filess(item);
      // data.save();
///////////////////SAVE///////////////////////////////
data.save(function (err) {
  if (err) return handleError(err);
  
  var News1 = new News({
        title: req.body.title,
        group_id: req.body.group_id,
        author: req.body.author,
        description: req.body.description,
      // var  date = new Date();
        // date: dateTime,
        image: data.urlImage

  });
  
  News1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
  });
});
//////////////////////////////////////////////////////
        
 
                var writeStream = gfs.createWriteStream({
                    filename: part.name,
                    mode: 'w',
                    content_type:part.mimetype,
                    metadata: {
                    // URL: "http//localhost:3000/" + filename,
                    name: data.title
                      }
                });
 
 
                writeStream.on('close', function() {
                     return res.redirect('/');
                     // res.status(200).send({
            // message: 'Success'

          // });
                });
                
                writeStream.write(part.data);
 
                writeStream.end();
 
};
exports.read = function(req, res) {
 
  gfs.files.find({ filename: req.params.filename }).toArray(function (err, files) {
 
      if(files.length===0){
      return res.status(400).send({
        message: 'File not found'
      });
      }
  
    res.writeHead(200, {'Content-Type': files[0].contentType});
    
    var readstream = gfs.createReadStream({
        filename: files[0].filename
    });
 
      readstream.on('data', function(data) {
          res.write(data);
      });
      
      readstream.on('end', function() {
          res.end();        
      });
 
    readstream.on('error', function (err) {
      console.log('An error occurred!', err);
      throw err;
    });
  });
 
};






    exports.insert = function(req, res, next) {
        var  dateTime = new Date();
      var item = {
        title: req.body.title,
        group_id: req.body.group_id,
        author: req.body.author,
        description: req.body.description,
      // var  date = new Date();
        date: dateTime
      };

      var data = new News(item);
      data.save(function (err) {
  if (err) return handleError(err);
  
  var User1 = new User({
    username: req.body.username,
    password: req.body.password,
     _creator: data.title

  });
  
  User1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
  });
});

      res.redirect('/');
};
    


    exports.show = function(req, res, next) {
    	News.find({}, function(err, response) {
    		if (err) {
    			return next(err);
    		} else {
    			res.render('test', {items: response});
    		}
    	});
};
    exports.delete = function(req, res, next) {
      var id = req.body.id;
        News.findByIdAndRemove(id).exec();

        res.redirect('/');
};
    
    exports.showJson = function (req, res) {

//       User.find().populate('_creator').sort({date: -1}).exec(function(err, User) {
//     if(err)
//         res.send(err);
//     res.json(User);
// });

//////////////////TEST USER//////////////////
News
.find()
.populate('File')
.sort({date: -1})
.exec(function (err, users) {
  if (err) return handleError(err);
  console.log('The creator is %s', users);
  // prints "The creator is Aaron"
  res.json(users);
});

////////////////TEST NEWS//////////////////////
// News
// .find()
// .populate('UserAut')
// .exec(function (err, News) {
//   if (err) return handleError(err);
//   console.log('The creator is %s', News);
//   // prints "The creator is Aaron"
//   res.json(News);
// });

//////////////////////////////////////////////

//        News.find().populate({
//   path: 'image',
//   model: 'File'
// }).sort({date: -1}).limit(2).exec(function(err, News) {
//     if(err)
//         res.send(err);
//     res.json(News);
// });

    };

