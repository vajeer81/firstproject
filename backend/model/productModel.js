const mongoose = require("mongoose")
const projectschema = new mongoose.Schema({
    title: {
                type: String,
            },
            dis: {
                type: String,
            },
            price: {
                type: Number,
            },
            reting: {
                type: String,
        
            },
            color: {
                type: String,
        
            },
            img: {
                type: String,
        
            },
            size: {
                type: String,
        
            }
})


module.exports = mongoose.model("product",projectschema)








// const mongoose = require('mongoose');
// const prodectSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, 'Please add a title']
//     },
//     dis: {
//         type: String,
//         required: [true, 'Please add a discription']
//     },
//     price: {
//         type: Number,
//         required: [true, 'Please add a price']
//     },
//     reting: {
//         type: String,

//     },
//     color: {
//         type: String,
//         required: [true, 'Please add a color']

//     },
//     img: {
//         type: String,
//         required: [true, 'Please add a img']

//     },
//     size: {
//         type: String,
//         required: [true, 'Please add a size']

//     }
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Product', prodectSchema);