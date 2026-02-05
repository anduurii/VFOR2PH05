const teamService = require('../lib/teamService');


const index2 = (req, res) => {
    const teams = teamService.getTeams();
    res.render('teams', {title: 'LCK Teams', teams });
};

const detail2 = (req, res) => {
    const { id } = req.params;
    const team = teamService.getTeamById(id);

    if (!team) {
        return res.status(404).render('404', { title: 'Síða fannst ekki' });
    }

    res.render('team-details', { title: team.title, team });
};

module.exports = {
    index2,
    detail2
}