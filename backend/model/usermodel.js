const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    number:{
        type:number
    },
    profile:{
        type:String
    },
    employ:{
        type:number
    },
    student:{
        type:String
    },
    product:{
        type:String
    }
    

})

module.exports = mongoose.model("newdatauser",userschema)