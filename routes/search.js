const express = require("express")
const router = express.Router();
const app = express();

const {videosDetails: v_details} = require('../mongoose/mongoose')

app.use(express.json())

router.get("/", async function (req, res) {
    let reqStr = req.query.query.toLowerCase();
    // console.log(reqStr)
    if (reqStr !== "") {
        let filteredList = await v_details.find({title: {"$regex": reqStr, "$options": "i"}}).select({type: 1, title: 1, image_small: 1, slug: 1, _id: 0}).lean()
        let list2 = (await v_details.find({desc: {"$regex": reqStr, "$options": "i"}}).select({type: 1, title: 1, image_small: 1, slug: 1, _id: 0}).lean()).filter(i => !(filteredList.map(i => JSON.stringify(i))).includes(JSON.stringify(i)))
        // console.log(list2)
        filteredList = filteredList.concat(list2).map(i => {return {type: i.type,title: i.title,image: i.image_small,link: i.slug}});
        // console.log(filteredList)
        res.status(200).json({"results": filteredList})
    }else {
        res.json({"results": ""})
    }
})

module.exports = router