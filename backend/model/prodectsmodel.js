const mongoose = require("mongoose")
const proschema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please add the title "]

    },
    price:{
        type:Number,
        required:[true,"please add the price"]

    },
    image:{
        type:String,
        required:[true,"please add the image"]

    },
    reting:{
        type:String,
        required:[true,"please add the reting"]

    },
    dis:{
        type:String,
        required:[true,"please add the dis"]

    },
   
})


module.exports = mongoose.model("deletes",proschema)