const skills = [
    {
        id: 125223,
        skill: 'HTML',
        level: 'Expert'
    },
    {
        id: 127904,
        skill: 'CSS',
        level: 'Intermediate'
    },
    {
        id: 139608,
        skill: 'JavaScript',
        level: 'Advanced'
    },
    {
        id: 598765,
        skill: 'Node.js',
        level: 'Intermediate'
    },
];


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.level = 'Intermediate';
    skills.push(skill);
}

function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}