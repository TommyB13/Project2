const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const rounds = 10

const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"

const middleware = require('../middlewares')
const { emit } = require('nodemon')

router.post('/clue', (req, res) => {
    User.findOne({ name: req.body.name })
        .then(user => {
            if (!user) res.status(404).json({ error: 'no Team with that name found' })
            else {
                const clues = user.clues_found
                new_clue = req.body.new_clue
                let check = false
                for (let i = 0; i < clues.length; i++) {
                    if (new_clue == clues[i]) {
                        check = true
                    }
                }
                if (!check) {
                    clues.push(new_clue)
                    user.clues_found = clues
                    res.status(200).json(user.clues_found)
                    user.save();
                }
                else {
                    res.status(200).json("clue been found already")
                }
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/signup', (req, res) => {
    const newUser = User({ name: req.body.name, clues_found: req.body.clues_found })
    User.findOne({ name: req.body.name })
        .then(user => {
            if (!user) {
                newUser.save()
                    .then(user => {
                        res.status(200).json(newUser)
                    })
                    .catch(error => {
                        res.status(500).json(error)
                    })
            }
            else {
                res.status(403).json({ error: 'Team Name Already Exsits' })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })

});

router.get('/jwt-test', middleware.verify, (req, res) => {
    res.status(200).json(req.user)
})

module.exports = router
