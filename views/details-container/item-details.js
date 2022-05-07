const getTimeStamp = () => new Date().toLocaleString();
function sortBy (array,type) {
    let sortByVal = "";
    if (type === "latest") sortByVal = "timestamp"
    else if (type === "trending") sortByVal = "views"
    return array.sort(function (a, b) {
        if (a[sortByVal] > b[sortByVal]) return -1
        else if (b[sortByVal] > a[sortByVal]) return 1
        else return 0
    }).slice(0, 19)
}

let ft_details = [
    {
        section: 1,
        image: "f-t-1.png",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo dolor deserunt nam assumenda ipsa eligendi dolore, ipsum id fugiat quo enim impedit, laboriosam omnis minima voluptatibus incidunt. Accusamus, provident.",
        link: "",
    },
    {
        section: 2,
        image: "f-t-2.png",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo dolor deserunt nam assumenda ipsa eligendi dolore, ipsum id fugiat quo enim impedit, laboriosam omnis minima voluptatibus incidunt. Accusamus, provident.",
        link: "",
    }
]

let movie_arr = [
    {
        type: "movie",
        title: "venom",
        tagline: "The world has enough Superheroes.",
        desc: "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
        short_desc: "Investigative journalist Eddie Brock attempts a come",
        image_small: "venom-2018-small.jpg",
        image: "venom-2018.jpg",
        bg_image: "venom-bg.jpg",
        release_yr: "2018",
        genres: [
            {
                genre: "Science Fiction",
                slug: "sci-fi",
            },
            {
                genre: "Action",
                slug: "action",
            }
        ],
        length: "1h52min",
        actors: [
            {
                name: "Tom Hardy",
                image: "tom-hardy.jpg",
                slug: "tom-hardy",
            },
            {
                name: "Michele Williams",
                image: "michele-williams.jpg",
                slug: "michele-williams",
            }
        ],
        slug: "venom",
        nextPath: "#",
        recommendations: [
            {
                title: "1920 London",
                image: "16.jpg",
                slug: "1920-london",
            },
            {
                title: "Hobbit",
                image: "9.jpg",
                slug: "hobbit",
            }
        ],
        views: 20,
        timestamp: '19/09/2021, 11:01:20',
    },
    {
        type: "movie",
        title: "venom 2",
        tagline: "The world has enough Superheroes.",
        desc: "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
        short_desc: "Investigative journalist Eddie Brock attempts a come",
        image_small: "venom-2018-small.jpg",
        image: "venom-2018.jpg",
        bg_image: "venom-bg.jpg",
        release_yr: "2018",
        genres: [
            {
                genre: "Science Fiction",
                slug: "sci-fi",
            },
            {
                genre: "Action",
                slug: "action",
            }
        ],
        length: "1h52min",
        actors: [
            {
                name: "Tom Hardy",
                image: "tom-hardy.jpg",
                slug: "tom-hardy",
            },
            {
                name: "Michele Williams",
                image: "michele-williams.jpg",
                slug: "michele-williams",
            }
        ],
        slug: "venom2",
        nextPath: "#",
        recommendations: [],
        views: 16,
        timestamp: '19/09/2020, 11:03:21',
    },
    {
        type: "movie",
        title: "venom 3",
        tagline: "The world has enough Superheroes.",
        desc: "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
        short_desc: "Investigative journalist Eddie Brock attempts a come",
        image_small: "venom-2018-small.jpg",
        image: "venom-2018.jpg",
        bg_image: "venom-bg.jpg",
        release_yr: "2018",
        genres: [
            {
                genre: "Science Fiction",
                slug: "sci-fi",
            },
            {
                genre: "Comedy",
                slug: "comedy",
            }
        ],
        length: "1h52min",
        actors: [
            {
                name: "Michele Williams",
                image: "michele-williams.jpg",
                slug: "michele-williams",
            },
        ],
        slug: "venom3",
        nextPath: "#",
        recommendations: [],
        views: 200,
        timestamp: '19/09/2021, 11:04:27',
    },
]

let series = [
    {
        type: "series",
        title: "What If...?",
        tagline: "One question changes everything.",
        desc: "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
        short_desc: "Taking inspiration from the comic books of the same",
        image_small: "what-if-small.jpg",
        image: "what-if.jpg",
        bg_image: "what-if-bg.jpg",
        release_yr: "2021",
        genres: [
            {
                genre: "Animation",
                slug: "animation",
            },
            {
                genre: "Action",
                slug: "action",
            },
            {
                genre: "Adventure",
                slug: "adventure",
            },
            {
                genre: "Science Fiction",
                slug: "sci-fi",
            },
            {
                genre: "Fanatsy",
                slug: "fanatsy",
            },
        ],
        length: "34min",
        actors: [
            {
                name: "Jeffrey Wright",
                image: "jeffrey-wright.jpg",
                slug: "jeffrey-wright",
            },
            {
                name: "Terri Douglas",
                image: "terri-douglas.jpg",
                slug: "terri-douglas",
            },
            {
                name: "Matthew Wood",
                image: "matthew-wood.jpg",
                slug: "matthew-wood",
            },
        ],
        slug: "what-if",
        seasons: [],
        recommendations: [],
        views: 260,
        timestamp: '21/09/2021, 20:11:07',
    },
    {
        type: "series",
        title: "The Walking Dead",
        tagline: "Fight the dead. Fear the living.",
        desc: "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
        short_desc: "Sheriff's deputy Rick Grimes awakens from a coma to",
        image_small: "the-walking-dead-small.jpg",
        image: "the-walking-dead.jpg",
        bg_image: "the-walking-dead-bg.jpg",
        release_yr: "2010",
        genres: [
            {
                genre: "Action",
                slug: "action",
            },
            {
                genre: "Adventure",
                slug: "adventure",
            },
            {
                genre: "Drama",
                slug: "drama",
            },
            {
                genre: "Science Fiction",
                slug: "sci-fi",
            },
            {
                genre: "Fantasy",
                slug: "fantasy",
            },
        ],
        length: "42min",
        actors: [
            {
                name: "Norman Reedus",
                image: "norman-reedus.jpg",
                slug: "norman-reedus",
            },
            {
                name: "Melissa McBride",
                image: "melissa-mcbride.jpg",
                slug: "melissa-mcbride",
            },
        ],
        slug: "the-walking-dead",
        seasons: [
            {
                isCurrentSeason: false,
                image: "the-walking-dead-s10.jpg",
                sNo: "10",
                noOfEpisodes: "22",
                releaseYr: "2019",
                desc: "It is now Spring, a few months after the end of Season 9, when our group of survivors dared to cross into Whisperer territory during the harsh winter. The collected communities are still dealing with the after effects of Alpha’s horrific display of power, reluctantly respecting the new borderlines being imposed on them, all while organising themselves into a militia-style fighting force, preparing for a battle that may be unavoidable. But the Whisperers are a threat unlike any they have ever faced. Backed by a massive horde of the dead it is seemingly a fight they cannot win.",
                short_desc: "It is now Spring, a few months after the end of Season 9, when our group of survivors dared to cross into Whisperer territory during the harsh winter. The collected communities are still dealing with the after effects of Alpha’s horrific display of power, reluctantly respecting the new borderlines being imposed on them, all while organising themselves into a",
                episodes: [
                    {
                        eNo: "21",
                        title: "Diverged",
                        desc: "Daryl and Carol come to a fork in the road and head their separate ways. Each going into their own type of survival mode, the easiest of challenges become much harder. Will their individual journeys be the tipping point needed to mend their friendship, or is the distance between them permanent?",
                        link: "#",
                    },
                    {
                        eNo: "22",
                        title: "Here's Negan",
                        desc: "Carol takes Negan on a journey, hoping to minimize the increasing tension. Negan reflects on the events that led him to this point and comes to a conclusion about his future.",
                        link: "#",
                    }
                ]
            },
            {
                isCurrentSeason: true,
                image: "the-walking-dead-s11.jpg",
                sNo: "11",
                noOfEpisodes: "22",
                releaseYr: "2019",
                desc: "It is now Spring, a few months after the end of Season 9, when our group of survivors dared to cross into Whisperer territory during the harsh winter. The collected communities are still dealing with the after effects of Alpha’s horrific display of power, reluctantly respecting the new borderlines being imposed on them, all while organising themselves into a militia-style fighting force, preparing for a battle that may be unavoidable. But the Whisperers are a threat unlike any they have ever faced. Backed by a massive horde of the dead it is seemingly a fight they cannot win.",
                short_desc: "It is now Spring, a few months after the end of Season 9, when our group of survivors dared to cross into Whisperer territory during the harsh winter. The collected communities are still dealing with the after effects of Alpha’s horrific display of power, reluctantly respecting the new borderlines being imposed on them, all while organising themselves into a",
                episodes: [
                    {
                        eNo: "21",
                        title: "Diverged",
                        desc: "Daryl and Carol come to a fork in the road and head their separate ways. Each going into their own type of survival mode, the easiest of challenges become much harder. Will their individual journeys be the tipping point needed to mend their friendship, or is the distance between them permanent?",
                        link: "#",
                    },
                    {
                        eNo: "22",
                        title: "Here's Negan",
                        desc: "Carol takes Negan on a journey, hoping to minimize the increasing tension. Negan reflects on the events that led him to this point and comes to a conclusion about his future.",
                        link: "#",
                    }
                ]
            },
        ],
        recommendations: [],
        views: 150,
        timestamp: '21/09/2021, 20:25:04',
    },
]

let latest = sortBy([...movie_arr].concat([...series]),"latest") // sorting descending timestamp

let trending = sortBy([...movie_arr].concat([...series]),"trending")

let actors = [
    {
        name: "Tom Hardy",
        image: "tom-hardy-full.jpg",
        link: function () {
            return this.name.toLowerCase().split(" ").join("-")
        }
    },
    {
        name: ""
    }
]

let genres = [
    {
        genre: "Action",
        slug: "action",
    },
    {
        genre: "Adventure",
        slug: "adventure",
    },
    {
        genre: "Animation",
        slug: "animation",
    },
    {
        genre: "Comedy",
        slug: "comedy",
    },
    {
        genre: "Crime",
        slug: "crime",
    },
    {
        genre: "Documentary",
        slug: "documentary",
    },
    {
        genre: "Drama",
        slug: "drama",
    },
    {
        genre: "Family",
        slug: "family",
    },
    {
        genre: "Fantasy",
        slug: "fantasy",
    },
    {
        genre: "History",
        slug: "history",
    },
    {
        genre: "Horror",
        slug: "horror",
    },
    {
        genre: "Music",
        slug: "music",
    },
    {
        genre: "Mystery",
        slug: "mystery",
    },
    {
        genre: "Romance",
        slug: "romance",
    },
    {
        genre: "Science Fiction",
        slug: "sci-fi",
    },
    {
        genre: "TV Movie",
        slug: "tv-movie",
    },
    {
        genre: "Thriller",
        slug: "thriller",
    },
    {
        genre: "War",
        slug: "war",
    },
    {
        genre: "Western",
        slug: "western",
    },
]

module.exports = {
    featured: ft_details,
    movies: movie_arr.slice(0, 19),
    web_series: series.slice(0, 19),
    latest,
    trending,
    actors,
    genres,
}
