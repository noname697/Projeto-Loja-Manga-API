"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Compra", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      valor: {
        type: Sequelize.FLOAT,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      codigo_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Usuario", 
          key: "id", 
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("Compra");
  },
};
