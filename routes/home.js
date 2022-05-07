const router = require('express').Router();
const mong_con = require('../mongoose/mongoose')

const v_details = mong_con.videosDetails
const ft_details = mong_con.featuredDetails

// middleware that is specific to this router
/*router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})*/

// define the home page route
router.get('/', async function (req, res) {
    let movies = await v_details.find({type: "movie"}).select({type: 1, title: 1, short_desc: 1, image: 1, slug: 1, _id: 0}).limit(12).lean()
    let latest = await v_details.find({}).sort({timestamp: 'desc'}).select({type: 1, title: 1, short_desc: 1, image: 1, slug: 1, _id: 0}).limit(12).lean()
    let trending = await v_details.find({}).sort({views: 'desc'}).select({type: 1, title: 1, short_desc: 1, image: 1, slug: 1, _id: 0}).limit(12).lean()
    let series = await v_details.find({type: "series"}).select({type: 1, title: 1, short_desc: 1, image: 1, slug: 1, _id: 0}).limit(12).lean()
    let ft_1 = await ft_details.findOne({section: 1}).lean()
    let ft_2 = await ft_details.findOne({section: 2}).lean()
    // console.log(ft_2[0])
    res.render('index', {
        layout: 'home',
        movies,
        latest,
        trending,
        series,
        ft_image_1: ft_1.image,
        ft_desc_1: ft_1.desc,
        ft_image_2: ft_2.image,
        ft_desc_2: ft_2.desc,
    })
    // console.log(movies_details)
})

// define the contact page route
router.get('/contact', function (req, res) {
    res.send('contact page')
})

// define the about route
router.get('/about', function (req, res) {
    res.send('About us')
})

module.exports = router
