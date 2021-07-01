'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable(
      'clients',
      {
        id:{
          type:Sequelize.INTEGER,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true
      },
      nom: {
        type: Sequelize.STRING,
      },
      prenom: {
          type: Sequelize.STRING,
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable('client');
  }
};
