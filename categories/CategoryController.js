const route = require("express").Router()

route.get("/categories", (req, res) => {
    res.send("categorias")
})



module.exports = route