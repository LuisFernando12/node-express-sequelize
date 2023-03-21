"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Class, {
        foreignKey: "teacher_id",
      });
      People.hasMany(models.Enrollment, {
        foreignKey: "student_id",
        scope: { status: 'confirmado' },
        as: 'enrolledClasses'
      });
    }
  }
  People.init(
    {
      name: { type: DataTypes.STRING, validate: {
        len: (data)=>{
          if(data.length < 3) throw new Error('Número de caracters inválido, o nome deve conter mais de 3 caracteres')
        }
      } },
      active: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "E-mail inválido",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      // defaultScope: {
      //   where: {
      //     active: true,
      //   },
      // },
      scopes: {
        all: {
          where: {},
        },
      },
      modelName: "People",
    }
  );
  return People;
};
