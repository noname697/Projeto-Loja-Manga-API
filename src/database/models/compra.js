"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: "codigo_compra",
        as: "usuario",
      });
      this.belongsToMany(models.Produto, {
        through: "CompraProdutos",
        foreignKey: "compra_id",
        as: "produtos",
      });
    }
  }
  Compra.init(
    {
      valor: DataTypes.FLOAT,
      endereco: DataTypes.STRING,
      status: DataTypes.STRING,
      codigo_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Usuario",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Compra",
      tableName: "Compra",
    }
  );
  return Compra;
};
