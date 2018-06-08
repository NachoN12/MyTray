const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("slot", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    pesoActual: {
        type: Sequelize.INTEGER,
    }
});