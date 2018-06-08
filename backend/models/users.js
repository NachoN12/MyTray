const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.TEXT,
    },
    apellido: {
        type: Sequelize.TEXT,
    },
    correo: {
            type: Sequelize.TEXT,
    },
    password: {
            type: Sequelize.TEXT,
        }
});