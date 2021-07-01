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
      'postes',
      {
        id:{
          type:Sequelize.INTEGER,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true
      },
      nom: {
        type: Sequelize.STRING,
      }
      } )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable('poste');
  }
};
