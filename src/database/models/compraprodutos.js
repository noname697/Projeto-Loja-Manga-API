"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CompraProdutos extends Model {
    static associate(models) {
      this.belongsTo(models.Compra, { foreignKey: "compra_id" });
      this.belongsTo(models.Produto, { foreignKey: "produto_id" });
    }
  }
  CompraProdutos.init(
    {
      compra_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Compra",
          key: "id",
        },
      },
      produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Produto",
          key: "id",
        },
      },
      quantidade: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "CompraProdutos",
      tableName: "CompraProdutos",
    }
  );
  return CompraProdutos;
};
