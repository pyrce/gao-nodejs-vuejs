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
        'attribuer',
        {
          id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        clientId: {
          type: Sequelize.INTEGER,
          references: {         // User belongsTo Company 1:1
            model: 'clients',
            field: 'id_client',
            key: 'id'
          }
         // field:"id_client",references:"client"
        },
        posteId: {
            type: Sequelize.INTEGER,
            references: {         // User belongsTo Company 1:1
                model: 'postes',
                references:"poste",
               // field: 'id_ordi',
                key: 'id'
              }
             //field:"id_ordi",references:"poste"
          },
          jour: {
            type: Sequelize.STRING,
          },
          heure:{
              type:Sequelize.TIME
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
    queryInterface.dropTable('attribuer');
  }
};
