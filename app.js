
//There used to be a very long and winding comment here, but most of it was useless and I want to make my comments at least a little bit professional.

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const lodash = require('lodash'); //Just in case, who knows?
const crsRoutes = require('./routes/crsRoutes');
const usrRoutes = require('./routes/usrRoutes');

//Express app + Prisma.
const app = express();
const port = process.env.PORT ?? 3000; //Some very basic port validation combined with loading it from the .env file because I have one of those now and I'm gonna get the most out of it.

//Middleware & static files. New middleware is express.json for auto-parsing json files.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET, //Slightly fixed! It's now in the .env, because I forgot I had one of those. That might be a bit better, but I've heard the vaguest whispers that I should actually be using some kind of digital vault and do not want to mess with all of that.
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 500, //Setting an arbitrarily high session length so users don't have to log in multiple times. If this was an actual production app I'd set a reasonable lockout instead but this isn't going to be storing sensitive information.
        httpOnly: true, //Basic security settings I neglected.
        sameSite: 'lax'
    } 
}))

app.use((req, res, next) => { //Passthrough middleware to automatically load the user in every .ejs file.
    res.locals.user = {
        uid: req.session.userUid,
        type: req.session.userType,
        name: req.session.userName
    };
    next();
});

app.use((req, res, next) => {
    res.locals.alert = req.session.error;
    delete req.session.error;
    next();
});

app.use(morgan('dev'));
app.use(express.json());

//View engine.
app.set('view engine', 'ejs');

//Redirect because I improperly structured the site and ended up with an index page that doesn't render at the standard location.
app.get('/', (req, res) => {
    res.redirect('/courses');
});

//Call xyzRoutes.js to handle course routings.
app.use('/user', usrRoutes);
app.use('/courses', crsRoutes);

//Real error handling! I'm so tired. To clarify, I looked up how to do this, and I'm not certain I'm doing it right, but it seems to work, and lets me give the user actual alerts when things go wrong.
app.use((err, req, res, next) => {
    console.error(err.stack);
    if (req.accepts('html')) {
        req.session.error = err.message || 'Unexpected error.';
        return res.redirect('back');
    }
    res.status(500).json({ error: err.message });
})

//404 handling.
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
  