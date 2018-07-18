const express = require('express');
const router  = express.Router();
const Player    = require('../models/player');

const ensureLogin = require("connect-ensure-login");


router.get('/players', (req, res, next) => {
    Player.find()
    .then((listOfPlayers)=>{
        res.render('players', {listOfPlayers});
    })
    .catch((err)=>{
        next(err); 
     })
});


router.get('/players/:id', (req, res, next) => {
    const id = req.params.id;
    Player.findById(id)
    
    .then((thePlayer)=>{    
        res.render('playerDetails',  {thePlayer: thePlayer});
    })
    .catch((err)=>{
       next(err); 
    })
});






module.exports = router;
