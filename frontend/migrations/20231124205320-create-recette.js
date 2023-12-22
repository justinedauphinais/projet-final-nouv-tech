'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recette', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      portion: {
        type: Sequelize.INTEGER
      },
      temps: {
        type: Sequelize.INTEGER
      },
      id_difficulte: {
        type: Sequelize.INTEGER
      },
      id_categorie: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recette');
  }
};