const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Player = require("./player")




const teamSchema = new Schema({
    
   QB:  {type: Schema.Types.ObjectId, ref: 'Player'},
   RB: [{type: Schema.Types.ObjectId, ref: 'Player'}],
   WR:  [{type: Schema.Types.ObjectId, ref: 'Player'}],
   TE:  {type: Schema.Types.ObjectId, ref: 'Player'}, 
   DST: {type: Schema.Types.ObjectId, ref: 'Player'}, 
   K:   {type: Schema.Types.ObjectId, ref: 'Player'}, 

});

const Team = mongoose.model("Team", teamSchema);



module.exports = Team;