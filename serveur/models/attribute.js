var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestionordi');

const attribute = sequelize.define('attributions', {
    // attributes
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
       // field: 'id_client',
        key: 'id'
      }
    //  field:"id_client",references:"client"
    },
    posteId: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
            model: 'poste',
            references:"poste",
            field: 'id_ordi',
            key: 'id'
          }
        //  field:"id_ordi",references:"poste"
      },
      jour: {
        type: Sequelize.DATEONLY,
      },
      heure:{
          type:Sequelize.TIME
      }
 } ,{ tableName:"attributions",sequelize, timestamps: false});

 module.exports =attribute;