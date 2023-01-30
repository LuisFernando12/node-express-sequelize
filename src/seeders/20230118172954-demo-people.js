"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          name: "John Doe",
          active: true,
          email: "john@email.com",
          role: 'estudate',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ana Maria",
          active: true,
          email: "ana@email.com",
          role: 'estudate',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Luis Fernando",
          active: true,
          email: "luis@email.com",
          role: 'estudate',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rafaela Balerine",
          active: true,
          email: "rafabalerine@alura.com",
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
