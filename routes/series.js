const express = require('express');
const router = express.Router();

const mong_con = require('../mongoose/mongoose')
const v_details = mong_con.videosDetails
const genres = mong_con.genres

const perPage = 20;

// middleware that is specific to this router
/*router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})*/

// define the series home page route
router.get(['/', '/page/:pagenum?'], async function (req, res) {
    const page = req.params.pagenum;
    let pageNum = parseInt(page);

    // genre queries
    const genreQuery = req.query.genre;
    // console.log(genreQuery)
    /*const filteredSeriesList = details.web_series.filter(function (m) {
        return m.genres.find(function (g) {
            if (g.slug === genreQuery || genreQuery === undefined || genreQuery === "") return m
        })
    })*/
    let inGenres = await genres.findOne({slug: genreQuery}).lean()
    // console.log(inGenres)
    let filteredSeriesList
    if (inGenres !== null) {
        filteredSeriesList = await v_details.find({type:"series", "genres.slug": genreQuery}).lean()
    }
    else if (genreQuery === undefined || genreQuery === "") {
        filteredSeriesList = await v_details.find({type:"series"}).lean()
    }else {
        res.status(404).send("Bad Request")
    }
    // console.log(filteredSeriesList)
    let showGenre = true;
    let showAllGenre = false;
    if (genreQuery !== undefined && genreQuery !== "") {
        showAllGenre = true;
    }
    // console.log(showAllGenre)

    let genre = await genres.find({}).lean()
    let total = filteredSeriesList.length;
    let pages = Math.ceil(total/perPage);
    if ((!isNaN(page) && pageNum <= pages) || page === undefined) {
        if (isNaN(pageNum)) pageNum = 1
        if (pageNum > 1) showGenre = false
        const loadfrom = (pageNum-1)*perPage;
        const loadto = (pageNum*perPage)-1;
        res.render('movies', {
            layout: "movies",
            css: "movies",
            type: "Series",
            items: filteredSeriesList.slice(loadfrom, loadto),
            showGenre,
            genres: genre,
            showAllGenre,
        })
    } else {
        res.status(404).send("Bad Request")
    }
})

// define the series detail page route
router.get('/:pagelink', async function (req, res) {
    let seriesSlug = await v_details.findOne({type: "series", slug: req.params.pagelink}).lean()
    if (seriesSlug !== null) {
        // console.log(elem)
        const currentSeason = [(await v_details.findOne({type: "series", slug: req.params.pagelink}).lean()).seasons.find(function (s) {
            return s.isCurrentSeason === true
        })]
        // console.log(currentSeason)
        res.render('series', {
            seriesCss: true,
            title: seriesSlug.title,
            main_image: seriesSlug.image,
            backdrop_img: seriesSlug.bg_image,
            release_year: seriesSlug.release_yr,
            genres: seriesSlug.genres,
            time_length: seriesSlug.length,
            tagline: seriesSlug.tagline,
            storyline: seriesSlug.desc,
            actors: seriesSlug.actors,
            currentSeason,
            seasons: seriesSlug.seasons,
            recommendations: seriesSlug.recommendations,
        })
    } else {
        res.status(404).send("Not Found")
    }
})

// define the about route
/*router.get('/about', function (req, res) {
    res.send('About birds')
})*/

module.exports = router
