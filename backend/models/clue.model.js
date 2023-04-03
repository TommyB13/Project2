const mongoose = require('mongoose')

const model = mongoose.Schema({
    urlStem: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    }
});

module.exports = new mongoose.model("Clue", model)