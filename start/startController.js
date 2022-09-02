const route = require("express").Router()

route.get("/", (req, res) => {
    res.render("start/index")
})



module.exports = route