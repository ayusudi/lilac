'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ToDos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull : false
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        allowNull : false
      },
      date : {
        type : Sequelize.DATEONLY,
        allowNull : false
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : "Users",
          key : "id"
        },
        onDelete : "cascade",
        onUpdate  : "cascade"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ToDos');
  }
};