'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Instruction extends Model {
    static associate(models) {
      
      Instruction.belongsTo(models.Recette, { foreignKey: 'id_recette' });
    }
  }
  Instruction.init({
    id_recette: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Recette', 
        key: 'id', 
      }
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instruction',
  });
  return Instruction;
};