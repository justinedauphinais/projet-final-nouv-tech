'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const ingredients = [
      { nom: 'Farine' },
      { nom: 'Sucre' },
      { nom: 'Beurre' },
      { nom: 'Oeufs' },
      { nom: 'Lait' },
      { nom: 'Sel' },
      { nom: 'Poivre' },
    ];

    await queryInterface.bulkInsert('ingredient', ingredients, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredient', null, {});
  }
};
