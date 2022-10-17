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

route.get("/continente/lugares", (req, res) => {
    
    const continente = req.query.continente
    console.log(continente)
    
    if( continente === "América"){
        res.redirect("/continente/lugares/america")
    } else if(continente === "Europa") {
        res.redirect("/continente/lugares/europa")
    } else if(continente === "África"){
        res.redirect("/continente/lugares/africa")
    }else if(continente === "Ásia"){
        res.redirect("/continente/lugares/asia")
    }else if(continente === "Oceania"){
        res.redirect("/continente/lugares/oceania")
    }else if(continente === "Antártida"){
        res.redirect("/continente/lugares/antartida")
    }
})

module.exports = route

