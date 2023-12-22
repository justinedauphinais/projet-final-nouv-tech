'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recette_Ingredient extends Model {
    static associate(models) {
      Recette_Ingredient.belongsTo(models.Recette, { foreignKey: 'id_recette', as: 'recette' });
      Recette_Ingredient.belongsTo(models.Ingredient, { foreignKey: 'id_ingredient', as: 'ingredient' });
    }
  }

  Recette_Ingredient.init({
    id_recette: DataTypes.INTEGER,
    id_ingredient: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recette_Ingredient',
  });

  return Recette_Ingredient;
};