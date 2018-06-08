const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("contenedor", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    peso:{
        type: Sequelize.INTEGER,
    },
    descripcion:{
        type: Sequelize.TEXT,
    }
});