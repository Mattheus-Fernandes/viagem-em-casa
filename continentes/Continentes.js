const Sequelize = require("sequelize")
const connection = require("../database/index")



const Continentes = connection.define("continentes", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Continentes.sync({force: false}).then(() => console.log("database created with success"))
module.exports = Continentes