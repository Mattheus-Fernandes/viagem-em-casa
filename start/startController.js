const route = require("express").Router()

route.get("/", (req, res) => {
    res.render("start/index")
})

route.get("/sobre", (req, res) => {
    res.render("start/sobre")
})


module.exports = route