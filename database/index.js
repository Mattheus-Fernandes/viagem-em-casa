const Sequelize = require("sequelize")

const connection = new Sequelize("viagememcasa", "root", "14109015", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection