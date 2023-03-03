const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"please add the name"]
    },
    email: {
        type: String,
        required:[true,"please add the email"]
        
    },
    number: {
        type: Number,
        required:[true,"please add the number"],
        min:[0,"wrong the min"],
        max:[10,"wrong the max"]
    },
    profile: {
        type: Array
    },
    employ: {
        type: Array
    },
    student: {
        type: Array
    },
    product: {
        type:Array
    }


})

module.exports = mongoose.model("newdatauser", userschema)