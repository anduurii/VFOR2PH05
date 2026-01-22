const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));



const getTeams = () => {
    const data = fs.readFileSync(path.join(__dirname, 'src/data/teams.json'));
    return JSON.parse(data);
}

const getMovies = () => {
    const data = fs.readFileSync(path.join(__dirname, 'src/data/movies.json'));
    return JSON.parse(data);
}




// Slóðir
app.get('/', (req, res) => {
    const movies = getMovies();
    res.render('index', { title: 'Bíovefurinn', movies });
});

app.get('/movie/:id', (req, res) => {
  const movies = getMovies();
  const movie = movies.find(m => m.id === req.params.id);

  if (!movie) {
    return res.status(404).render('404', { title: 'Síða fannst ekki' });
  }

  res.render('movie-details', { title: movie.title, movie });
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