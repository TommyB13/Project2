const mongoose = require('mongoose')

const model = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    clues_found: {
        type: [String],
        required: false
    }
    ,
    new_clue: {
        type: String,
        required: false
    }
});

module.exports = new mongoose.model("Teams", model)
