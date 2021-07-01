var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestionordi');

const client = sequelize.define('clients', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nomClient: {
      type: Sequelize.STRING,
    },
    prenomClient: {
        type: Sequelize.STRING,
      }
 } ,{tableName:"clients",sequelize, timestamps: false});

  module.exports =  client;