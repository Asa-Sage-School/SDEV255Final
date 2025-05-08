//Due to various personal issues, I've had less time to work on stage 1 than I would prefer. To account for this, I'm making some snap judgments I can adjust later on,
//and using that to jump right into getting the whole thing up and running. I have about 20 hours to turn this in, so I'm going to move fast and break things when I'd prefer not to.

//Instead of the MongoDB and Mongoose framework I've been taught, I elected to learn Prisma entirely on my own because when I see a security issue, I overcompensate.
//I am in pain, but this silly little class project will be secure into the 2050s or I will die trying.
//At the time of writing there are like 7 security holes in Mongoose, and I am not typing all of that boilerplate over and over.
//I'm also going to be using Express, EJS, and Node.js like the Node.js tutorial, since that's something I understand now and is immediately convenient. (so I can re-use some of that stuff to get things going more quickly.)
//But I'll also be trying to work in Bootstrap and maybe a bit of other stuff. 

require('dotenv').config(); //Required to make Prisma work, but yipee for security and convenience and all that.
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

app.use(morgan('dev'));
app.use(express.json());

//View engine.
app.set('view engine', 'ejs');

//Redirect because I am a dumb stupid idiot who only designed 20% of the website.
app.get('/', (req, res) => {
    res.redirect('/courses');
});

app.use('/user', usrRoutes);

//Call crsRoutes to handle routings.
app.use('/courses', crsRoutes);

//404 handling.
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
  