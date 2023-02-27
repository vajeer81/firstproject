const mongoose = require("mongoose")
const shecmasub = new mongoose.Schema({
    subname:{
        type:String
    }
},
{timestamps:true}
)

module.exports = mongoose.model("studentsub",shecmasub)