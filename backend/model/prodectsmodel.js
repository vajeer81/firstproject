const mongoose = require("mongoose")
const proschema = new mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    reting:{
        type:String
    },
    dis:{
        type:String
    },
   
})


module.exports = mongoose.model("deletes",proschema)