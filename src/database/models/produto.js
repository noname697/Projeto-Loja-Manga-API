"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      this.belongsToMany(models.Compra, {
        through: "CompraProdutos", // Nome da tabela intermediária
        foreignKey: "produto_id",
        as: "compras",
      });
    }
  }
  Produto.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      autor: DataTypes.STRING,
      editora: DataTypes.STRING,
      idioma: DataTypes.STRING,
      paginas: DataTypes.INTEGER,
      data_lancamento: DataTypes.DATE,
      estoque: DataTypes.INTEGER,
      foto: DataTypes.STRING,
      valor: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Produto",
      tableName: "Produto",
    }
  );
  return Produto;
};
