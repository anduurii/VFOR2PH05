const fs = require('fs');
const path = require('path');


const loadData = () => {
    const filePath = path.join(__dirname, '../data/teams.json');
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

const getTeams = () => {
    const teams = loadData();
    return teams;
};

const getTeamById = (id) => {
    const teams = loadData();
    return teams.find((t) => t.id === id);
};

module.exports = {
    getTeams,
    getTeamById
};