const mongoose = require("mongoose");
const Schema   = mongoose.Schema;




const teamSchema = new Schema({
   QB:  { type : ObjectId, ref: 'Player' } ,
   RB:  [ { type : ObjectId, ref: 'Player' } ],
   WR:  [{ type : ObjectId, ref: 'Player' } ],
   TE:  { type : ObjectId, ref: 'Player' } ,
   DST: { type : ObjectId, ref: 'Player' } ,
   K:  { type : ObjectId, ref: 'Player' } ,

});

const Team = mongoose.model("Team", teamSchema);



module.exports = Team;