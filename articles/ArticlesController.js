const route = require("express").Router()

route.get("/articles", (req, res) => {
    res.send("artigos")
})



module.exports = route