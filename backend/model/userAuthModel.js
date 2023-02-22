const mongoose = require('mongoose');
const UserAuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add an name ']
    },
    email: {
        type: String,
        required: [true, 'Please add an Email']
    },
    password: {
        type: Number,
        required: [true, 'Please add an password']
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('userauth', UserAuthSchema);