var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestionordi');

const user = sequelize.define('user', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    nom: {
      type: Sequelize.STRING,
    },
      login: {
        type: Sequelize.STRING,
      },
      password:{
          type:Sequelize.STRING
      }
 } ,{ timestamps: false});

 module.exports =  user;