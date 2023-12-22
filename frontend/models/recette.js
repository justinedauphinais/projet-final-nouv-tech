'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recette extends Model {
    static associate(models) {
      Recette.belongsTo(models.Difficulte, { foreignKey: 'id_difficulte', as: 'difficulte' });
      Recette.belongsTo(models.Categorie, { foreignKey: 'id_categorie', as: 'categorie' });
    }
  }

  Recette.init({
    nom: DataTypes.STRING,
    description: DataTypes.STRING,
    portion: DataTypes.INTEGER,
    temps: DataTypes.INTEGER,
    id_difficulte: DataTypes.INTEGER,
    id_categorie: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recette',
  });

  return Recette;
};