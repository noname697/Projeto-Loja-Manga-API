"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Compra",
      [
        {
          valor: 35.9,
          endereco: "Rua A, 123",
          status: "Finalizado",
          codigo_compra: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          valor: 81.9,
          endereco: "Av B, 456",
          status: "Processando",
          codigo_compra: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          valor: 55.0,
          endereco: "Rua C, 789",
          status: "Enviado",
          codigo_compra: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          valor: 89.9,
          endereco: "Rua D, 101",
          status: "Finalizado",
          codigo_compra: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          valor: 42.0,
          endereco: "Av E, 202",
          status: "Cancelado",
          codigo_compra: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Compra", null, {});
  },
};
