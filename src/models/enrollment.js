'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate(models) {
      Enrollment.belongsTo(models.People,{
        foreignKey:'student_id'
      });
      Enrollment.belongsTo(models.Class,{
        foreignKey:'class_id'
      });
    }
  }
  Enrollment.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'Enrollment',
  });
  return Enrollment;
};