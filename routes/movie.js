const express = require('express');
const router = express.Router();

const mongoose_con = require('../mongoose/mongoose')
const v_details = mongoose_con.videosDetails
const genres = mongoose_con.genres

const perPage = 20;

/*function findelem (slug) {
    for (let e of details.movies) {
        if (e.slug === slug) {
            return e
        }
    }
}*/

// middleware that is specific to this router
/*router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})*/

// define the movie home page route
router.get(['/', '/page/:pageNum?'], async function (req, res) {
    const page = req.params.pageNum;
    let pageNum = parseInt(page);

    //genre queries
    const genreQuery = req.query.genre;
    // console.log(genreQuery);
    /*const filteredMoviesList = details.movies.filter(function (m) {
        return m.genres.find(function (g) {
            return g.slug === genreQuery || genreQuery === undefined || genreQuery === ""
        })
    })*/
    let inGenres = await genres.findOne({slug: genreQuery}).lean();
    // console.log(inGenres)
    let filteredMoviesList;
    if (inGenres !== null) {
        filteredMoviesList = await v_details.find({type:"movie", "genres.slug": genreQuery}).lean();
    }
    /*else if (genreQuery === undefined || genreQuery === "") {
        filteredMoviesList = await v_details.find({type:"movie"}).lean();
    }*/else {
        filteredMoviesList = await v_details.find({type:"movie"}).lean();
        // res.status(404).send("Bad Request");
    }
    // console.log(filteredMoviesList)
    let showGenre = true;
    let showAllGenre = false;
    if (genreQuery !== undefined && genreQuery !== "") {
        showAllGenre = true;
    }
    // console.log(showAllGenre)

    /*const t = filteredMoviesList.count()
    console.log(t)*/
    let genre = await genres.find({}).lean();
    const total = filteredMoviesList.length;
    const pages = Math.ceil(total/perPage);
    if ((!isNaN(page) && pageNum <= pages) || page === undefined) {
        if (isNaN(pageNum)) pageNum = 1;
        if (pageNum > 1) showGenre = false;
        const loadFrom = (pageNum-1)*perPage;
        const loadTo = (pageNum*perPage)-1;
        res.render('movies', {
            layout: "movies",
            css: "movies",
            type: "Movies",
            items: filteredMoviesList.slice(loadFrom, loadTo),
            showGenre,
            genres: genre,
            showAllGenre,
        })
    } else {
        res.send("Page not found").status(404);
    }
})

// define the movie detail page route
router.get('/:pageLink', async function (req, res) {
    let movieSlug = await v_details.findOne({type: "movie", slug: req.params.pageLink}).lean()
    // console.log(movieSlug)
    if (movieSlug !== null) {
        // console.log(movieSlug)
        // console.log(host);
        res.render('movie', {
            title: movieSlug.title,
            main_image: movieSlug.image,
            backdrop_img: movieSlug.bg_image,
            release_year: movieSlug.release_yr,
            genres: movieSlug.genres,
            time_length: movieSlug.length,
            tagline: movieSlug.tagline,
            storyline: movieSlug.desc,
            actors: movieSlug.actors,
            nextPage: movieSlug.nextPath,
            recommendations: movieSlug.recommendations,
        })
    } else {
        res.status(404).send("Not Found")
    }
})

module.exports = router;
