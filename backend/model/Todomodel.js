const mongoose = require('mongoose');
const tudos = new mongoose.Schema({
    fistname:{
        type:String,
    required:[true,'Please add a fistname']

    },
    lastname:{
        type:String,
    required:[true,'Please add a lastname']

    },
    email:{
        type:String,
    required:[true,'Please add a email']

    },
    phone:{
        type:Number,
    required:[true,'Please add a phone']

    },
    pincode:{
        type:Number,
    required:[true,'Please add a pincode']

    },
    address:{
        type:String,
    required:[true,'Please add a address']

    },
    state:{
        type : String,
    required:[true,'Please add a state']

    },
    password:{
        type:String,
    required:[true,'Please add a pasword']

    }

},
{timestamps:true}
)

module.exports = mongoose.model('Tudoapp',tudos);
