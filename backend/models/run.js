const modelos = {}
modelos.users        = require("./users.js")
modelos.bandejas     = require("./bandejas.js")
modelos.elementos          = require("./elementos.js")
modelos.slots = require("./slots.js")
modelos.contenedores = require("./contenedor.js")
modelos.elementos.belongsTo(modelos.users,{
 foreignKey: "user_id",
  as: "user"
})
modelos.elementos.belongsTo(modelos.bandejas,{
 foreignKey: "bandeja_id",
  as: "bandeja"
})
modelos.slots.hasMany(modelos.users, {
  foreignKey: "user_id",
  as: "url"
})
modelos.slots.belongsTo(modelos.bandejas, {
  foreignKey: "bandeja_id",
  as: "bandeja"
})
modelos.slots.belongsTo(modelos.elementos, {
  foreignKey: "elemento_id",
  as: "elemento"
})
modelos.contenedores.belongsTo(modelos.users, {
  foreignKey: "user_id",
  as: "user"
})
module.exports = modelos