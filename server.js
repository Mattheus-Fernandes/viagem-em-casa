const express = require("express")
const app = express()

const connection = require("./database/index")
const ModelContinente = require("./continentes/Continentes")
const Dados = require("./dados/Dados")

const startControleler = require("./start/startController")
const continentesController = require("./continentes/continentesController")
const lugaresContinente = require("./continentes/lugaresContinentesController")

//settings ejs 
app.set("view engine", "ejs")

//public
app.use(express.static("public"))


//routes
app.use("/", startControleler)
app.use("/", continentesController)
app.use("/", lugaresContinente)

//database 
connection.authenticate()
    .then(() => console.log("Connected on the database"))
    .catch(error => console.log(error))


const port = process.env.PORT || 8080
app.listen(8080, () => console.log(`The server is listening on the port ${port}`))
