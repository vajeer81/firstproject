const mongoose = require("mongoose")
const Singupschema = new mongoose.Schema({
    fistname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    }
})


module.exports = mongoose.model("singup",Singupschema);