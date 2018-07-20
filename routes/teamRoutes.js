const express = require('express');
const teamRouter  = express.Router();
const Team    = require('../models/team');
const ensureLogin = require("connect-ensure-login");


teamRouter.get('/team', (req, res, next) => {
    Team.find()
    .then((listOfteams)=>{
        console.log('what: ', listOfteams)
        res.render('draftsimPage', { listOfteams });
    })
    .catch( err => next(err))
})






module.exports = teamRouter;