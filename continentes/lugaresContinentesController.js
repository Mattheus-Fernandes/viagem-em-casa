const route = require("express").Router()
const slugify = require("slugify")

route.get("/continente/lugares/america", (req, res) => {
    res.send("continentes/america")
})

route.get('/continente/lugares/europa', (req, res) => {
    res.send("continentes/europa")
})

route.get('/continente/lugares/africa', (req, res) => {
    res.send("continentes/africa")
})

route.get('/continente/lugares/asia', (req, res) => {
    res.send("continentes/asia")
})

route.get('/continente/lugares/oceania', (req, res) => {
    res.send("continentes/oceania")
})

route.get('/continente/lugares/antartida', (req, res) => {
    res.send("continentes/antartida")
})


module.exports = route