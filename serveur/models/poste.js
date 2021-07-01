var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/gestionordi');

const poste = sequelize.define('poste', {
    // attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nomPoste: {
      type: Sequelize.STRING,
    }
 } ,{ timestamps: false});

 module.exports = poste;