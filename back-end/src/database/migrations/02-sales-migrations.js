'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      total_price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Sales');
  },
};
