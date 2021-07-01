const express = require('express');
const router=express();
var cors = require('cors')
const gestionController = require('../controllers/gestionController.js');
const userController=require("../controllers/usersController.js");
const posteController=require("../controllers/postesController.js");

var corsOptions = {
    origin: function (origin, callback) {
      // db.loadOrigins is an example call to load
      // a list of origins from a backing database
      db.loadOrigins(function (error, origins) {
        callback(error, origins)
      })
    }
  }

router.post("/postes",gestionController.liste);
router.delete("/attribution/delete",gestionController.delete);
router.post("/attribution/attribuer",gestionController.attribuer);

router.post("/postes/add",posteController.add);
router.delete("/postes",posteController.delete);

router.get("/users",userController.liste);
router.post("/clients/ajout",userController.add);
router.post("/users/login",userController.login);
router.get("/users/logout",userController.logout);
module.exports = router;