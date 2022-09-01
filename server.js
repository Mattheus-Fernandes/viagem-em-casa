const express = require("express")
const app = express()

const articleController = require("./articles/ArticlesController")
const categoriesController = require("./categories/CategoryController")
const startControleler = require("./start/startController")

//settings ejs 
app.set("view engine", "ejs")

//public
app.use(express.static("public"))


//routes
app.use("/", startControleler)
app.use("/", categoriesController)
app.use("/", articleController)




const port = process.env.PORT || 8080
app.listen(8080, () => console.log(`The server is listening on the port ${port}`))
