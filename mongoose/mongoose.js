require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

// Database connection
// mvst_data @ admin_mvst = mAfNP7BO5QTroFqV
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.awfkby1.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, function () {
    console.log("connection successful");
});

let videoDetailsSchema = new mongoose.Schema({
    type: String,
    title: String,
    tagline: String,
    desc: String,
    short_desc: String,
    image_small: String,
    image: String,
    bg_image: String,
    release_yr: Number,
    genres: [{
        genre: String,
        slug: String,
    }],
    length: String,
    actors: [{
        name: String,
        image: String,
        slug: String,
    }],
    slug: String,
    seasons: [{
        isCurrentSeason: Boolean,
        image: String,
        sNo: Number,
        noOfEpisodes: Number,
        releaseYr: Number,
        desc: String,
        short_desc: String,
        episodes: [{
            eNo: Number,
            title: String,
            desc: String,
            link: String,
        }]
    }],
    nextPath: String,
    recommendations: [{
        title: String,
        image: String,
        slug: String,
    }],
    views: Number,
    timestamp: { type: Date, default: Date.now },
}, { timestamps: true })
const v_details = new mongoose.model('videos_detail', videoDetailsSchema)

let ft_detailsSchema = new mongoose.Schema({
    section: Number,
    image: String,
    desc: String,
    link: String,
}, { timestamps: true })
let ft_details = new mongoose.model('featured_detail', ft_detailsSchema)

let genreSchema = new mongoose.Schema({
    genre: String,
    slug: String,
}, { timestamps: true })
let genre = new mongoose.model('genre', genreSchema)

let actorSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String,
    movies: [{
        title: String,
        image: String,
        link: String,
    }]
}, { timestamps: true })
let actor = new mongoose.model('actor', actorSchema)

module.exports = {
    videosDetails: v_details,
    featuredDetails: ft_details,
    genres: genre,
    actors: actor,
}

