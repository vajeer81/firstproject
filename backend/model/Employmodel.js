const mongoose = require("mongoose")
const Employschema = new mongoose.Schema({
    Employid: {
        type: String,
        required: [true, "please add the id"]

    },
    Employname: {
        type: String,
        required: [true, "please add the name"]
    },
    Employemail: {
        type: String,
        required: [true, "please add the email"]

    },
    Employnumber: {
        type: String,
        required: [true, "please add the number"]

    },
    Employaddress: {
        type: String,
        required: [true, "please add the address"]

    },
    Employdob: {
        type: String,
        required: [true, "please add the dob"]

    },
    Employment: {
        type: String,
        required: [true, "please add the ment"]

    },
});

module.exports = mongoose.model("Employ", Employschema)