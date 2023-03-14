const mongoose = require("mongoose")
const newproductshema = new mongoose.Schema({
    MEN:{
        type:Object
    },
    WOMEN:{
        type:Object
    },
    ELECTRONICS:{
        type:Object
    },
    FASHION:{
        type:Object
    }
})


module.exports= mongoose.model("newproduct",newproductshema)