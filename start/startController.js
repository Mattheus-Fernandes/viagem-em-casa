const route = require("express").Router()

route.get("/", (req, res) => {
    res.send("pagina inicial")
})



module.exports = route