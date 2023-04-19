const mongoose = require('mongoose')

const model = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    clues_found: {
        type: [String],
        required: false
    },
    new_clue: {
        type: String,
        required: false
    },
    time: {
        type: Date,
        required: false
    }
});

module.exports = new mongoose.model("Team", model)