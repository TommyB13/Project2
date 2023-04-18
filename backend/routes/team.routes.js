const express = require('express')
const router = express.Router()
const Team = require('../models/team.model');
const teamModel = require('../models/team.model');

router.get('/array', (req, res) => {
    Team.find()
        .then(team => {
            if (!team) res.status(404).json({ error: 'no Team with that name found' })
            else {
                const all = new Array;
                for (let i = 0; i < team.length; i++) {
                    const temp = {
                        name: team[i].name,
                        clues: team[i].clues_found.length,
                        time: team[i].time
                    }
                    all[i] = temp
                }
                all.sort(function (b, a) {
                    if (b.clues == a.clues) {
                        return a.time - b.time
                    }
                    return b.clues - a.clues
                })
                all.reverse()
                res.status(200).json(all)
            }
        })
        .catch(error => {
            res.status(500).json(error)
            console.log(error)
        })
});

router.post('/clue', (req, res) => {
    Team.findOne({ name: req.body.name })
        .then(team => {
            if (!team) res.status(404).json({ error: 'No teams found' })
            else {
                const clues = team.clues_found
                new_clue = req.body.new_clue
                let check = false
                for (let i = 0; i < clues.length; i++) {
                    if (new_clue == clues[i]) {
                        check = true
                    }
                }
                if (!check) {
                    clues.push(new_clue)
                    team.clues_found = clues
                    team.time = new Date()
                    // console.log(new Date())
                    res.status(200).json(team.clues_found)
                    team.save();
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
    const newTeam = Team({ name: req.body.name, clues_found: req.body.clues_found })
    Team.findOne({ name: req.body.name })
        .then(team => {
            if (!team) {
                newTeam.save()
                    .then(team => {
                        res.status(200).json(newTeam)
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

module.exports = router