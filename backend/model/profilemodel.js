const mongoose = require("mongoose")
const profileschema = new mongoose.Schema({
    img:{
        type:String
    },
    fistname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String
    },
})

module.exports = mongoose.model("profile",profileschema)