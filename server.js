const express = require('express'),
    expHbs = require('express-handlebars'),
    path = require('path'),

    session = require("express-session"),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),

    // initiating router files
    homeRouter = require('./routes/home'),
    movieRouter = require('./routes/movie'),
    seriesRouter = require('./routes/series'),
    actorRouter = require('./routes/actor'),
    searchRouter = require('./routes/search'),

    app = express();

// view engine is handlebars
app.engine('handlebars', expHbs.engine())
    .set('view engine', 'handlebars');

let hbs = expHbs.create({});
hbs.handlebars.registerHelper('ifCond', function(v1, v2) {
    return v1 === v2;
});

// serve static files
app.use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use('/static', express.static(path.join(__dirname, 'static')))
    .use(session({
        secret: "mvst",
        saveUninitialized: true,
        resave: true
    }))

// using router middleware
    .use('/', homeRouter)
    .use('/movie', movieRouter)
    .use('/series', seriesRouter)
    .use('/actor', actorRouter)
    .use('/search', searchRouter);

app.get('/theme/:mode?', (req, res) => {
    // req.session.theme = "light";
    // res.status(200).send("ok");
    // res.send(req.params.mode === undefined);
    if (req.params.mode === undefined || req.params.mode === null || req.params.mode === "") {
        if (req.session.theme){
            res.status(200).send(req.session.theme);
        } else {
            req.session.theme = "dark";
            res.status(200).send(req.session.theme);
        }
    } else {
        req.session.theme = req.params.mode;
        res.status(200).send(req.session.theme);
    }
})

module.exports = app;
