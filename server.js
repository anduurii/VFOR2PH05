const express = require('express');
const path = require('path');

// const HOSTNAME = '127.0.0.1';

const app = express();
const PORT = 3000;




// View Engine Setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');




// CSS og Static Skrár
app.use(express.static(path.join(__dirname, 'public')));



// Slóðir
app.get('/', (req, res) => {
    res.render('index', { title: 'Forsíða' });
});


app.get ('/about', (req, res) => {
    res.render ('about', { title: 'Um Okkur' });
});


// Villumeðhöndlun
app.use((req, res) => {
    res.status(404).send('Síða fannst ekki (404)');
});



// Ræsa þjónusta
app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}/`);
});