const route = require("express").Router()
const slugify = require("slugify")

route.get("/continente/lugares/america", (req, res) => {
    res.render("continentes/lugares/americaLugares")
})

route.get('/continente/lugares/europa', (req, res) => {
    res.render("continentes/lugares/europaLugares")
})

route.get('/continente/lugares/africa', (req, res) => {
    res.render("continentes/lugares/africaLugares")
})

route.get('/continente/lugares/asia', (req, res) => {
    res.render("continentes/lugares/asiaLugares")

})

route.get('/continente/lugares/oceania', (req, res) => {
    res.send("continentes/oceania")
})

route.get('/continente/lugares/antartida', (req, res) => {
    res.send("continentes/antartida")
})


module.exports = route