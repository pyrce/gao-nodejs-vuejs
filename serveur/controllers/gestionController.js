var controller={}
var poste=require("../models/poste");
var client=require("../models/client");
var attribuer=require("../models/attribute");

var bcrypt = require('bcrypt');
var user=require("../models/user");
const { DateTime } = require("luxon");
const { Op } = require("sequelize");

/*
attribuer.belongsTo(poste);
attribuer.belongsTo(client);

client.hasMany(attribuer);
poste.hasMany(attribuer);
*/

attribuer.belongsTo(poste,{foreignKey: 'posteId'});
attribuer.belongsTo(client,{foreignKey: 'clientId'});

client.hasMany(attribuer);
poste.hasMany(attribuer);
var ITEM_PER_PAGE = 3;
controller.liste=  async (req,res)=> {

    const page = +req.body.page || 1;
    const totalItem = await poste.findAndCountAll();
    const totalPage = Math.ceil(totalItem.count / ITEM_PER_PAGE);

let jour = req.body.date
    poste.findAll({

        include: [
            {
                model: attribuer,
                required: false,
                where: {
                    jour: jour
                },
                include: [{
                    model: client,
                    required: false
                }]
            }
        ],
        offset: (page - 1) * ITEM_PER_PAGE,
        limit: ITEM_PER_PAGE
    } 
        ).then(async postes=>{


            res.json({postes:postes,page:page,total:totalPage});
        }).catch(err=>{
            console.log(err)
        });

}

controller.attribuer=(req,res)=>{

data=req.body;
console.log(data);

jour=new Date().toISOString().substr(0, 10);
attribuer.create({
    posteId:data.posteId,
    clientId:data.clientId,
    jour:jour,
    heure:data.heure
}).then( () =>{
    res.sendStatus(200);
})
}

controller.delete= (req,res)=>{

id=req.body.attr

attribuer.destroy({where:{id:id}}).then(()=>{
    res.sendStatus(200);
} )
}
module.exports = controller;