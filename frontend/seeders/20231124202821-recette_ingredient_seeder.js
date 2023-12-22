'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const recettes_ingredients = [
      {
        id_recette: 1,
        id_ingredient: 1
      },
      {
        id_recette: 2,
        id_ingredient: 2
      },
      {
        id_recette: 3,
        id_ingredient: 3
      },
      {
        id_recette: 4,
        id_ingredient: 4
      },
    ];
    await queryInterface.bulkInsert('recette_ingredient', recettes_ingredients, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recette_ingredient', null, {});
  }
};
