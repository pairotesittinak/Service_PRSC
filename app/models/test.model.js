var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Add Model
var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
}, 
{collection: 'person'}
);
mongoose.model("person", personSchema);
