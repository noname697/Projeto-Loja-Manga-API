"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Produto", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      editora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idioma: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paginas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_lancamento: {
        type: Sequelize.DATE,
      },
      estoque: {
        type: Sequelize.INTEGER,
      },
      foto: {
        type: Sequelize.STRING,
      },
      valor: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Produto");
  },
};
