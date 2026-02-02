"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      this.hasMany(models.Compra, {
        foreignKey: "codigo_compra",
        as: "compras",
      });
    }
  }
  Usuario.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "Usuario",
    },
  );
  return Usuario;
};
