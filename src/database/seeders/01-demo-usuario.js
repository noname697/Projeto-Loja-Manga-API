"use strict";
const bycrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const senhaCriptografada = await bycrypt.hash("123456", 8);

    await queryInterface.bulkInsert(
      "Usuario",
      [
        {
          nome: "Ana Silva",
          email: "ana@email.com",
          senha: senhaCriptografada,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Bruno Costa",
          email: "bruno@email.com",
          senha: senhaCriptografada,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Carla Souza",
          email: "carla@email.com",
          senha: senhaCriptografada,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Diego Lima",
          email: "diego@email.com",
          senha: senhaCriptografada,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Elena Martins",
          email: "elena@email.com",
          senha: senhaCriptografada,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuario", null, {});
  },
};
