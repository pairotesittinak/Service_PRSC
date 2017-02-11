// var User = require('mongoose').model('user');
var News = require('mongoose').model('newss');
 var Filess = require('mongoose').model('File');


var fs = require('fs');
var mongoose = require('mongoose'),
    _ = require('lodash');
 
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);
 
exports.create = function(req, res) {
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
      data.save();


        var part = req.files.filefield;
 
                var writeStream = gfs.createWriteStream({
                    filename: part.name,
            mode: 'w',
                    content_type:part.mimetype
                });
 
 
                writeStream.on('close', function() {
                     return res.status(200).send({
            message: 'Success'
          });
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
      data.save();

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

      Filess.find().sort({date: -1}).exec(function(err, Filess) {
    if(err)
        res.send(err);
    res.json(Filess);
});

//        News.find().populate({
//   path: 'image',
//   model: 'File'
// }).sort({date: -1}).limit(2).exec(function(err, News) {
//     if(err)
//         res.send(err);
//     res.json(News);
// });

    }

