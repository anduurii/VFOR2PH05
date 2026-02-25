require('dotenv').config();     
const express = require('express');
const path = require('path');

const moviesRouter = require('./src/routes/movies.routes');
const teamsRouter = require('./src/routes/teams.routes');

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', teamsRouter);
app.use('/', moviesRouter);


// Villumeðhöndlun
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Síða fannst ekki' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Eitthvað fór úrskeiðis!');
});


// Ræsa þjónusta
app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}/`);
});