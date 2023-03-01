const mongoose = require("mongoose")
const Employschema = new mongoose.Schema({
    Employid:{
        type:String
    },
    Employname:{
        type:String
    },
    Employemail:{
        type:String
    },
    Employnumber:{
        type:String
    },
    Employaddress:{
        type:String
    },
    Employdob:{
        type:String
    },
    Employment:{
        type:String
    },
});

module.exports = mongoose.model("Employ",Employschema)