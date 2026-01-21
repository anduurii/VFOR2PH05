const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));



const getTeams = () => {
    const teams = fs.readFileSync(path.join(__dirname, 'src/data/teams.json'));
    return JSON.parse(teams);
}


// Slóðir
app.get('/', (req, res) => {
    res.render('index', { title: 'Forsíða' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Um Okkur' });
});

app.get('/teams', (req, res) => {
    res.render('teams', { title: 'Teams' });
});

app.get('/team-details', (req, res) => {
    res.render('team-details', { title: 'Team details' });
});



// Villumeðhöndlun
app.use((req, res) => {
    res.status(404).send('Síða fannst ekki (404)');
});



// Ræsa þjónusta
app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}/`);
});