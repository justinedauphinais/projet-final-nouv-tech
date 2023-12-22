'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const allergies_recettes = [
      {
        id_allergie: 1,
        id_recette: 1
      },
      {
        id_allergie: 2,
        id_recette: 2
      },
      {
        id_allergie: 3,
        id_recette: 3
      },
      {
        id_allergie: 4,
        id_recette: 4
      },
    ];
    await queryInterface.bulkInsert('allergie_recette', allergies_recettes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('allergie_recette', null, {});
  }
};
