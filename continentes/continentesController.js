const route = require("express").Router()
const slugify = require("slugify")

route.get("/america", (req, res) => {
    res.render("continentes/america")
})

route.get('/europa', (req, res) => {
    res.render("continentes/europa")
})

route.get('/africa', (req, res) => {
    res.render("continentes/africa")
})

route.get('/asia', (req, res) => {
    res.render("continentes/asia")
})

route.get('/oceania', (req, res) => {
    res.render("continentes/oceania")
})

route.get('/antartida', (req, res) => {
    res.render("continentes/antartida")
})


module.exports = route