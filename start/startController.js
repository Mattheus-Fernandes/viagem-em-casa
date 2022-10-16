const route = require("express").Router()
const Continentes = require("../continentes/Continentes")

route.get("/", (req, res) => {
    Continentes.findAll()
        .then(continentes => {
                res.render("start/index", {
                    continentes
                })
        })
})

route.get("/sobre", (req, res) => {
    res.render("start/sobre")
})

route.get("/continentes", (req, res) => {
    res.render("start/continente")
})



module.exports = route

