const mongoose = require('mongoose');
const tudos = new mongoose.Schema({
    fistname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    pincode:{
        type:Number,
    },
    address:{
        type:String
    },
    state:{
        type : String
    },
    password:{
        type:String
    }

},
{timestamps:true}
)

module.exports = mongoose.model('Tudoapp',tudos);
