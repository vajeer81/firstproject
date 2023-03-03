const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add the name"]

    },
    email:{
        type:String,
        required:[true,"please add the email"]

    },
    password:{
        type:String,
        required:[true,"please add the password"]
        
    },
    number:{
        type:String,
        required:[true,"please add the number"]
        
    }
});

module.exports = mongoose.model('students',studentSchema);