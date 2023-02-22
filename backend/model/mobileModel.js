const mongoose = require("mongoose")
const mobileprodect  = new mongoose.Schema({
    mobile:{
        type:String
    },
    brand:{
        type:String
    },
    price:{
       type: Number
       
    },
    img:{
        type:String
    }
})
module.exports = mongoose.model("phone",mobileprodect);