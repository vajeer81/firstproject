const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    dis: {
        type: String,
        required: [true, 'Please add a discription']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    reting: {
        type: String,

    },
    color: {
        type: String
    },
    img: {
        type: String,
      required: [true, 'Please add a img']

    },
    size:{
      type:String,
      required: [true, 'Please add a size']

    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', studentSchema);