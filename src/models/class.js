'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.belongsTo(models.People, {
        foreignKey:'teacher_id'
      });
      Class.belongsTo(models.Level,{
        foreignKey:'level_id'
      });
    }
  }
  Class.init({
    date_start: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};