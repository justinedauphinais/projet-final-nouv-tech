'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const allergies = [
      { nom: 'Gluten' },
      { nom: 'Lactose' },
      { nom: 'Arachides' },
      { nom: 'Fruits à coque' },
      { nom: 'Poisson' },
      { nom: 'Crustacés' },
      { nom: 'Soja' },
      { nom: 'Oeufs' },
      { nom: 'Sésame' },
      { nom: 'Moutarde' },
    ];

    await queryInterface.bulkInsert('allergie', allergies, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('allergie', null, {});
  }
};
