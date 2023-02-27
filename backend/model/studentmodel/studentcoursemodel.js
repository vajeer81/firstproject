const mongoose = require("mongoose");
const course  = new mongoose.Schema({
    course:{
        type:Object
    }
})

module.exports = mongoose.model("course",course);