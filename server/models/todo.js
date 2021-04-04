'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ToDo.belongsTo(models.User)
    }
  };
  ToDo.init({
    title: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN,
    date : DataTypes.DATEONLY,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks : {
      beforeCreate(instance) {
        instance.isDone = false
        instance.date = new Date()
      }
    },
    modelName: 'ToDo',
  });
  return ToDo;
};