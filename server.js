const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));





// Slóðir

app.get('/', (req, res) => {
    const movies = getMovies();
    res.render('index', { title: 'Bíovefurinn', movies });
});



app.get('/about', (req, res) => {
    res.render('about', { title: 'Um Okkur' });
});


app.get('/teams', (req, res) => {
    const teams = getTeams();
    res.render('teams', { title: 'Teams', teams });
});



app.get('/team/:id', (req, res) => {
    const teams = getTeams();
    const team = teams.find(t => t.id === req.params.id);

    if (!team) {
        return res.status(404).render('404', { title: 'Síða fannst ekki (404)' });
    }

    res.render('team-details', { title: team.title, team });            

});



// Villumeðhöndlun
app.use((req, res) => {
    res.status(404).send('Síða fannst ekki (404)');
});


// Ræsa þjónusta
app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}/`);
});