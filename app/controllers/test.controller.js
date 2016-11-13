// var User = require('mongoose').model('user');
// var Person = require('mongoose').model('person');
var Images = require('mongoose').model('images');
var multer  = require('multer')
// var upload =  multer({
//     dest    : './uploads/',
//     onError : function(err, next) {
//       console.log('error', err);
//       next(err);
//     }
//   });
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage }).array('userPhoto',2);

exports.home = function(req, res, next) {
      res.render('test');
};

exports.create = function(req, res) {        
 upload(req,res,function(err) {
    console.log(req.body);
    console.log(req.files);
    if(err) {
        return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  }
  )};

// exports.TestFormData = function(req, res,next){
//     // res
//     console.log('reaching here');
//   console.log(req.body);
//   console.log(req.file);
//   // console.log(file);
//   // console.log(path);
//   res.json({success: true});
// };

// exports.renderPerson = function(req, res) {
// 	res.render('index');
// };

// exports.addPerson = function(req, res) {
// 	var personInfo = req.body; 
// 	 if(!personInfo.name || !personInfo.age || !personInfo.nationality){
//         res.render('show_message_person', {message: "Sorry, you provided worng info", type: "error"});
//     }
//     else{
//         var newPerson = new Person({
//            name: personInfo.name,
//             age: personInfo.age,
//             nationality: personInfo.nationality
//         });
//         newPerson.save(function(err, docs){
//             if(err)
//                 res.render('show_message_person', {message: "Database error", type: "error"});
//             else
//                 res.render('show_message_person', {message: "New person added", type: "success", person: personInfo});
            
//         });
//     }
// };



// TEST INSERT SHOE DELETE UPDATE
//     exports.home = function(req, res, next) {
//       res.render('index');
// };


//     exports.insert = function(req, res, next) {
//       var item = {
//         name: req.body.name,
//         age: req.body.age,
//         nationality: req.body.nationality
//       };

//       var data = new Person(item);
//       data.save();

//       res.redirect('/');
// };
    


//     exports.showperson = function(req, res) {
//     	Person.find({}, function(err, persons) {
//     		if (err) {
//     			return next(err);
//     		} else {
//     			res.json(persons);
//     		}
//     	});
// };

//     exports.getPerson = function(req, res, next)  {
//         Person.find({}, function(err, doc) {
//             if (err) {
//                 return next(err);
//             } else {
//                 res.render('index', {items: doc});
//             }
//         });

// };

//     exports.deletePerson = function(req, res, next) {
//       var id = req.body.id;
//         Person.findByIdAndRemove(id).exec();
//         res.redirect('/');
// };


//      exports.updatePerson = function(req, res, next) {
//       var id = req.body.id;

//       Person.findById(id, function(err, doc) {
//         if (err) {
//           // console.error('error, no entry found');
//           // return next(err);
//           return console.error('Update Error, no entry found');
//          // return  res.render('index', {message: "error"});
//         }
//         doc.name = req.body.name;
//         doc.age = req.body.age;
//         doc.nationality = req.body.nationality;
//         doc.save();
//       })
//       res.redirect('/');
//       // res.render('index', {message: "Update Success"});
//       console.error('Update Success');
// };