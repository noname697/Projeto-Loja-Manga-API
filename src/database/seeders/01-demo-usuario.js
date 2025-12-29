"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Usuario",
      [
        {
          nome: "Ana Silva",
          email: "ana@email.com",
          senha: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Bruno Costa",
          email: "bruno@email.com",
          senha: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Carla Souza",
          email: "carla@email.com",
          senha: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Diego Lima",
          email: "diego@email.com",
          senha: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Elena Martins",
          email: "elena@email.com",
          senha: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuario", null, {});
  },
};
