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
  	date: Date,
  	author: String,
  	image: {type: Schema.Types.Object, ref: 'File' },
  	// News_ID:Schema.ObjectId,
    description: String
}, 
{collection: 'NewsDetail'}
);
mongoose.model('newss', newsSchema);


// var FileSchema = new mongoose.Schema({}, { strict: false }, 'fs.files')
// // //FileModel = mongoose.model('File', FileSchema)
// mongoose.model('File', FileSchema);

var File = mongoose.model("File", new Schema({}, {strict: false}), "fs.files" );

var UserSchema = Schema({
    image: {type: Schema.Types.Object, ref: 'File' } // refer the model
});

var User = mongoose.model('User', UserSchema);