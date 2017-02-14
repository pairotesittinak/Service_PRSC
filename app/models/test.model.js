var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var GFS = mongoose.model("GFS", new Schema({}, {strict: false}), "fs.files" );

// var UserSchema = Schema({
//     image: {type: Schema.Types.Object, ref: 'File' } // refer the model
// });

//Add Model
var newsSchema = mongoose.Schema({
    title: String,
    group_id: Number,
  	date: { 
  		type: Date, 
  		default: Date.now() 
  	},
  	author: String,
  	image: {type: Schema.Types.Object, ref: 'File' },
  	// UserAut: [{
  	// 	type: Schema.Types.ObjectId, 
  	// 	ref: 'Users' 
  	// }],
  	// News_ID:Schema.ObjectId,
    description: String
}, 
{collection: 'News'}
);
var newss = mongoose.model('newss', newsSchema);


/////////////////TEST USER//////////////////////////////

var usersSchema = mongoose.Schema({
   username: String,
   password: String,
   // _creator : [{ type: String, ref: 'newss' }],
    // image: {type: Schema.Types.Object, ref: 'File' } // refer the model
    image: {type: Schema.Types.Object, ref: 'File' }
}, 
{collection: 'User'}
);
var Users = mongoose.model('Users', usersSchema);

////////////////////////////////////////////////////////




// var FileSchema = new mongoose.Schema({}, { strict: false }, 'fs.files')
// // //FileModel = mongoose.model('File', FileSchema)
// mongoose.model('File', FileSchema);

var File = mongoose.model("File", new Schema({}, {strict: false}), "fs.files" );

// var UserSchema = Schema({
//     image: {type: Schema.Types.Object, ref: 'File' } // refer the model
// });

// var User = mongoose.model('User', UserSchema);