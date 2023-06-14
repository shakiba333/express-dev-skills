const skills = [
    {
        id: 1,
        skill: 'HTML',
        level: 'Expert'
    },
    {
        id: 2,
        skill: 'CSS',
        level: 'Intermediate'
    },
    {
        id: 3,
        skill: 'JavaScript',
        level: 'Advanced'
    },
    {
        id: 5,
        skill: 'Node.js',
        level: 'Intermediate'
    }
];


module.exports = {
    getAll
};

function getAll() {
    return skills;
}