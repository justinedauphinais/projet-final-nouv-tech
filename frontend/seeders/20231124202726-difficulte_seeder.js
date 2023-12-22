'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const difficultes = [
      { nom: 'Facile' },
      { nom: 'Moyen' },
      { nom: 'Difficile' },
    ];

    await queryInterface.bulkInsert('difficulte', difficultes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('difficulte', null, {});
  }
};
