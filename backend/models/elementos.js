const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("elemento", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    userId: {
            type: Sequelize.INTEGER,
        },
        peso: {
            type: Sequelize.INTEGER,
        },
        descripcion: {
            type: Sequelize.TEXT,
        }
});