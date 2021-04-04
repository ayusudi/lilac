'use strict';
const {Model} = require('sequelize');
const {hashPassword} = require("../helpers")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.ToDo)
    }
  };
  User.init({
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate(instance) {
        instance.email = instance.email.toLowerCase()
        instance.password = hashPassword(instance.password)
      }
    },
    modelName: 'User',
  });
  return User;
};