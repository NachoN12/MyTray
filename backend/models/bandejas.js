const sequelize = global.sequelize
const Sequelize = require('sequelize');
module.exports = sequelize.define("bandeja", {
    id:{ type: Sequelize.INTEGER,
        primaryKey: true,
        }
});