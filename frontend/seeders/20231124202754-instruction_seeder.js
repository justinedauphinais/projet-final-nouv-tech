'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const instructions = [
      {
        id_recette: 1,
        description: 'description 1'
      },
      {
        id_recette: 2,
        description: 'description 2'
      },
      {
        id_recette: 3,
        description: 'description 3'
      },
      {
        id_recette: 4,
        description: 'description 4'
      },
    ];

    await queryInterface.bulkInsert('instruction', instructions, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('instruction', null, {});
  }
};
