const mongoose = require('mongoose'); 
 
var roleSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    value:{
        type:String,
        required:true,
        unique:true,
    },
 
});

//Export the model
module.exports = mongoose.model('Role', roleSchema);