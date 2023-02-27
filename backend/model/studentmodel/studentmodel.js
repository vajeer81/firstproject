const mongoose = require("mongoose")
const student = new mongoose.Schema({
    name:{type:String },
    coursse:{type:Object},
    email:{type:String},
    subject:{type:Object},
    number:{type:String},
    gender:{type:String},
    schoolname:{type:Object},
    country:{type:Object}

})

module.exports = mongoose.model("student",student)