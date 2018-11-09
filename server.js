const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engins', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>')
    res.render('home.hbs', {
        homeTitle: 'Home Page',
        welcomemessage: 'welcome to home page',
        currentYear: new Date().getFullYear()

    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()

    });

});
app.get('/bad', (req, res) => {
    res.send({
        errormessage: 'Unable to handle request'
    });
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
