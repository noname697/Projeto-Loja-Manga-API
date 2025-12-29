"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CompraProdutos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      compra_id: {
        type: Sequelize.INTEGER,
        references: { model: "Compra", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      produto_id: {
        type: Sequelize.INTEGER,
        references: { model: "Produto", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      quantidade: {
        // Opcional: para saber quantos livros foram comprados
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CompraProdutos");
  },
};
