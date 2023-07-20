// /rutas de charachters
//TODAS LAS REQ QUE LLEGAN A ESTE ARCHIVO TIENEN EL /characters IMPLICITO, GRACIAS AL server.use('/characters', characterRouter) DE INDEX
const express = require('express')
var getCharById = require('../controllers/getCharById');
const characterRouter = express.Router()



// var getCharDetail = require('./controllers/getCharDetail.js');
characterRouter.get('/:id', getCharById) //3001/characters/12




module.exports = characterRouter;