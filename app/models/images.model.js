var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Add Model
var imagesSchema = mongoose.Schema({
    title: String,
    image: String
}, 
{collection: 'testImages'}
);
mongoose.model("images", imagesSchema);