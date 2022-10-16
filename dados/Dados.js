const Sequelize = require("sequelize")
const connection = require("../database/index")
const Continentes = require("../continentes/Continentes")

const Dados = connection.define("dados", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Continentes.hasMany(Dados)
Dados.belongsTo(Continentes)



module.exports = Dados