const mongoose  = require("mongoose")
const country = new mongoose.Schema({
    CountryCode:{
        type:String
    },
    CountryName:{
        type:String
    },
    CountrySchool:{
        type:Object
    }
})


module.exports = mongoose.model("studentcountry",country)