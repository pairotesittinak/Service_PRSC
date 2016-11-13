var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Add Model
var newsSchema = mongoose.Schema({
    title: String,
    group_id: Number,
  	date: Date,
  	author: String,
  	// News_ID:Schema.ObjectId,
    description: String
}, 
{collection: 'NewsDetail'}
);
mongoose.model('newss', newsSchema);
