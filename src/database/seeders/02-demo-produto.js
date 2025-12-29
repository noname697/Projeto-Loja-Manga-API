"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Produto",
      [
        {
          nome: "Dom Casmurro",
          descricao:
            "A clássica história de Bentinho e Capitu sobre dúvida e ciúmes.",
          autor: "Machado de Assis",
          editora: "Principis",
          idioma: "Português",
          paginas: 256,
          data_lancamento: new Date("1899-01-01"),
          estoque: 10,
          foto: "dom-casmurro.jpg",
          valor: 35.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "O Alquimista",
          descricao: "A jornada de um pastor em busca de sua Lenda Pessoal.",
          autor: "Paulo Coelho",
          editora: "Paralela",
          idioma: "Português",
          paginas: 208,
          data_lancamento: new Date("1988-01-01"),
          estoque: 15,
          foto: "alquimista.jpg",
          valor: 42.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "1984",
          descricao:
            "Um romance distópico sobre vigilância totalitária e o Grande Irmão.",
          autor: "George Orwell",
          editora: "Companhia das Letras",
          idioma: "Português",
          paginas: 416,
          data_lancamento: new Date("1949-06-08"),
          estoque: 20,
          foto: "1984.jpg",
          valor: 39.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "O Hobbit",
          descricao: "A aventura de Bilbo Bolseiro nas Terras Ermas.",
          autor: "J.R.R. Tolkien",
          editora: "HarperCollins",
          idioma: "Português",
          paginas: 336,
          data_lancamento: new Date("1937-09-21"),
          estoque: 5,
          foto: "hobbit.jpg",
          valor: 55.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Clean Code",
          descricao:
            "Um guia de boas práticas para o desenvolvimento de software.",
          autor: "Robert C. Martin",
          editora: "Alta Books",
          idioma: "Inglês",
          paginas: 464,
          data_lancamento: new Date("2008-08-01"),
          estoque: 12,
          foto: "clean-code.jpg",
          valor: 89.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Produto", null, {});
  },
};
