const Clue = require('../models/clue.model.js');

// get
exports.findByURLStem = (req, res) => {

    Clue.findOne({"urlStem": req.params.clueId})
        .then(clue => {
            if (!clue) {
                return res.status(404).send({
                    message: "Clue not found with urlStem " + req.params.clueId
                })
            } else {
                res.send(clue);
            }
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Clue not found with id " + req.params.clueId
                });
            }
            return res.status(500).send({
                message: "Error retrieving clue with id " + req.params.clueId
            });
        });
}

exports.findAll = (req, res) => {
    Clue.find()
        .then(clues => {
            res.send(clues);
        })
}

// post
exports.create = (req, res) => {

    
    const clue = new Clue({
        urlStem: req.body.urlStem || generateURLStem(20),
        message: req.body.message || ""
    })
    
    clue.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Clue."
        });
    });

}

// put
exports.update = (req, res) => {
    
    // TODO: needs more comprehensive check for url-unsafe characters
    if (req.body.urlStem != undefined && (req.body.urlStem === "" || req.body.urlStem.indexOf(" ") >= 0)) {
        return res.status(400).send({
            message: "urlStem can not be empty or contain whitespace"
        });
    }

    // Find clue and update it with the request body
    Clue.findByIdAndUpdate(req.params.clueId, {
        urlStem: req.body.urlStem,
        message: req.body.message || ""
    }, { new: true })
        .then(clue => {
            if (!clue) {
                return res.status(404).send({
                    message: "Clue not found with id " + req.params.clueId
                });
            }
            res.send(clue);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Clue not found with id " + req.params.clueId
                });
            }
            return res.status(500).send({
                message: "Error updating clue with id " + req.params.clueId
            });
        });
}

// delete
exports.delete = (req, res) => {

    Clue.findByIdAndRemove(req.params.clueId)
        .then(clue => {
            if (!clue) {
                return res.status(404).send({
                    message: "Clue not found with id " + req.params.clueId
                });
            }
            res.send({ message: "Clue deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Clue not found with id " + req.params.clueId
                });
            }
            return res.status(500).send({
                message: "Could not delete clue with id " + req.params.clueId
            });
        });
}

// Generate a random sequence of alphanumeric characters
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function generateURLStem(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}