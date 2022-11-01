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
    res.render("continentes/lugares/oceaniaLugares")
})

route.get('/continente/lugares/antartida', (req, res) => {
    res.render("continentes/lugares/antardidaLugares")
})

route.get("/continente/lugares/paises", (req, res) => {
    const pais = req.query.pais

    if(pais === "Guiana"){
        res.render("continentes/turismo/guiana")

    } else if(pais === "Guatemala"){
        res.render("continentes/turismo/guatemala")
        
    } else if(pais === "Trinidad e Tobago"){
        res.render("continentes/turismo/trinidadTobago")
        
    } else if(pais === "Lichtenstein"){
        res.send("<h1>Rota OK</h1>")
        
    } else if(pais === "Moldávia"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "San Marino"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === ""){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Etiopia"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Ilhas Mauricio"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Tanzania"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Afeganistão"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Bangladesh"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Mongólia"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Ilhas Marshall"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Kiribati"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Tuvalu"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "Lemaire Channel"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "King George Island"){
        res.send("<h1>Rota OK</h1>")

    } else if(pais === "The South Pole"){
        res.send("<h1>Rota OK</h1>")
        
    }
})


module.exports = route