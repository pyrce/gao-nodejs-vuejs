const express = require('express');
const path = require('path');
      // morgan = require('morgan'),
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');     
const app = express();
var Sequelize=require('sequelize')
var cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
var  database=require("./db.js");
const sequelize = new Sequelize(database);
// importing routes
const livreRoutes = require('./route/router');
app.use(cookieParser("secret"));
// settings
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', livreRoutes);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });