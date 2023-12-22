'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const categories = [
      { nom: 'Entrées' },
      { nom: 'Plats principaux' },
      { nom: 'Desserts' },
      { nom: 'Collations' },
      { nom: 'Soupes' },
      { nom: 'Salades' },
      { nom: 'Boissons' },
    ];

    await queryInterface.bulkInsert('categorie', categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorie', null, {});
  }
};
