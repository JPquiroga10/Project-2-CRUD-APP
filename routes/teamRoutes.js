const express = require('express');
const router  = express.Router();
const Player    = require('../models/team');
const ensureLogin = require("connect-ensure-login");


// teamRouter.get('/draftsimPage', (req, res, next) => {
//     Player.find()
//     .then((listOfPlayers)=>{
//         res.render('players', {listOfPlayers});
//     })
//     .catch((err)=>{
//         next(err); 
//      })
// });






module.exports = teamRouter;