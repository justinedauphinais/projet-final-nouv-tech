'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const recettes = [
      {
        nom: 'Recette 1',
        description: 'Description de la recette 1',
        portion: 4,
        temps: 30,
        id_difficulte: 1,
        id_categorie: 1,
        image: 'image1.jpg'
      },
      {
        nom: 'Recette 2',
        description: 'Description de la recette 2',
        portion: 2,
        temps: 45,
        id_difficulte: 2,
        id_categorie: 2,
        image: 'image2.jpg'
      },
      {
        nom: 'Recette 3',
        description: 'Description de la recette 3',
        portion: 6,
        temps: 120,
        id_difficulte: 3,
        id_categorie: 3,
        image: 'image3.jpg'
      },
      {
        nom: 'Recette 4',
        description: 'Description de la recette 4',
        portion: 1,
        temps: 15,
        id_difficulte: 1,
        id_categorie: 4,
        image: 'image4.jpg'
      },
    ];

    await queryInterface.bulkInsert('recette', recettes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recette', null, {});
  }
};
