'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Allergie_Recette extends Model {
    static associate(models) {
      Allergie_Recette.belongsTo(models.Allergie, { foreignKey: 'id_allergie', as: 'allergie' });
      Allergie_Recette.belongsTo(models.Recette, { foreignKey: 'id_recette', as: 'recette' });
    }
  }

  Allergie_Recette.init({
    id_allergie: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Allergie',
        key: 'id', 
      }
    },
    id_recette: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Recette', 
        key: 'id', 
      }
    }
  }, {
    sequelize,
    modelName: 'Allergie_Recette',
  });

  return Allergie_Recette;
};