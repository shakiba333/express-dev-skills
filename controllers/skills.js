module.exports = {
    index
}

const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}