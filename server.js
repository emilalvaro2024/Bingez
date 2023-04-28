// initiating router files
const express = require('express'),
    app = express(),
    expHbs = require('express-handlebars'),
    path = require('path'),
    port = normalizePort(process.env.PORT || '3000'),
    home = require('./routes/home'),
    movie = require('./routes/movie'),
    series = require('./routes/series'),
    actor = require('./routes/actor'),
    search = require('./routes/search');

// view engine is handlebars
app.engine('handlebars', expHbs.engine())
    .set('view engine', 'handlebars')

// serve static files
    .use('/static',express.static(path.join(__dirname, 'static')))

// using router middleware
    .use('/', home)
    .use('/movie', movie)
    .use('/series', series)
    .use('/actor', actor)
    .use('/search', search)

// app listen on port
    .listen(port, (err) => {
    if (err) throw err;
    console.log(`listening on port ${port}`)
})

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}