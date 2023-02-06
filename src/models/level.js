'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      Level.hasMany(models.Class,{
        foreignKey:'level_id'
      });
    }
  }
  Level.init({
    level_description: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'Level',
  });
  return Level;
};