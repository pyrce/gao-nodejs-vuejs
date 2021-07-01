var controller={}
var attribuer=require("../models/attribute");
var poste=require("../models/poste");

controller.add= (req,res)=>{

    poste.create({nomPoste:req.body.nomPoste}).then( () =>{
        res.sendStatus(200);
    })
    
    }

    controller.delete=(req,res)=>{

attribuer.destroy({where:{posteId:req.body.poste_id}}).then(()=>{

        poste.destroy({where:{id:req.body.poste_id}}).then(()=>{
            res.sendStatus(200);
        })
        
        })
    }
    module.exports = controller;