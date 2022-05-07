const express = require('express');
const router = express.Router();

const {actors: a_details} = require("../mongoose/mongoose")

// middleware that is specific to this router
/*router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})*/

// define the actor home page route
router.get('/', function (req, res) {
    res.status(404).send('Page not found')
    // res.render('actor')
})

// define the actor detail page route
router.get('/:actorname', async function (req, res) {
    let actor = await a_details.findOne({link: req.params.actorname}).lean()
    // console.log(actor)
    if (actor !== null) {
        /*let actor_index = actor_links.findIndex(function (l) {
            return l === actor
        })
        let actor_movies = movies.filter(function (i) {
            for (let a of i.actors) {
                if (a.name === actors[actor_index].name) return true
            }
        })*/
        // console.log(actor_movies)
        res.render('actor', {
            layout: "movies",
            css: "actors",
            image: actor.image,
            name: actor.name,
            movies: actor.movies,
        })
    }else {
        res.status(404).send("Page not found")
    }
})

// define the about route
/*router.get('/about', function (req, res) {
    res.send('About birds')
})*/

module.exports = router
