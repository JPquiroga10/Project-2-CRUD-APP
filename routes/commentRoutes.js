const express       = require('express');
const commRouter  = express.Router();
const Player        = require('../models/player');


commRouter.get('/players/:id/comments/new', (req, res, next) => {
    Player.findById(req.params.id)
    .then((thePlayer) => {
        res.render('addComment', {player: thePlayer})
    })
    .catch((daError) => {
        next(daError)
    })
});

commRouter.post('/players/:id/comments/create', (req, res, next) => {              
    Player.findByIdAndUpdate(req.params.id, {$push: {comments:req.body}})
    .then((response) => {
        
        res.redirect(`/players/${req.params.id}`)
    })
    .catch((err) => {
        next(err)
    })

});

// Book.findByIdAndUpdate(req.params.id, {
//     title: req.body.title,
//     author: req.body.author,
//     description: req.body.description,
//     rating: req.body.rating
// })
// .then((theBook)=>{
//     res.redirect('/books/'+theBook._id)
// })
// .catch((err)=>{
//     next(err);
// })  
// })

commRouter.get('/players/:id/comments/edit/:commentIndex', (req, res, next) => {
    Player.findById(req.params.id)
    .then((thePlayer)=>{
        res.render('editComment',{player:thePlayer, index: req.params.commentIndex})
    })
    .catch((err)=>{
        next(err)
      console.log('cant render this shit')
    })
   
})

                   
 commRouter.post('/players/:id/comments/update/:commentIndex', (req, res, next)=>{
    Player.findById(req.params.id)
    .then((thePlayer)=>{
        thePlayer.comments[req.params.commentIndex] = {
             commenter: req.body.commenterF,
            content: req.body.contentF
        }
        thePlayer.save()
        .then((response) => {
       
            res.redirect(`/players/${req.params.id}`)
        })
        .catch((err) => {
    console.log('error while tryning to update the comment')
            next(err)
        })

    })
        
      
     
    });



commRouter.post('/players/:id/comments/delete/:commentIndex', (req, res, next) => {
    const playerId = req.params.id;
    const commentIndex = req.params.commentIndex;
    Player.findById(playerId)
    .then((thePlayerThatImEditing) => {
        thePlayerThatImEditing.comments.splice(commentIndex, 1)
        thePlayerThatImEditing.save()
        .then((x)=>{
            res.redirect('/players/'+playerId)
        })
        .catch((err) => {
            next(err)
        })
    })
    .catch((err) => {

        next(err);
    })
    


});



module.exports = commRouter;