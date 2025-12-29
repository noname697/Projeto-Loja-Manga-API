"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CompraProdutos",
      [
        {
          compra_id: 1,
          produto_id: 1,
          quantidade: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          compra_id: 2,
          produto_id: 2,
          quantidade: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          compra_id: 2,
          produto_id: 3,
          quantidade: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          compra_id: 3,
          produto_id: 4,
          quantidade: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          compra_id: 4,
          produto_id: 5,
          quantidade: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CompraProdutos", null, {});
  },
};
