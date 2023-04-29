const express = require('express'),
    expHbs = require('express-handlebars'),
    path = require('path'),

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
    .set('view engine', 'handlebars')

// serve static files
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use('/static', express.static(path.join(__dirname, 'static')))

// using router middleware
    .use('/', homeRouter)
    .use('/movie', movieRouter)
    .use('/series', seriesRouter)
    .use('/actor', actorRouter)
    .use('/search', searchRouter);

module.exports = app;
