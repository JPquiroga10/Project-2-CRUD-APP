const mongoose = require("mongoose");
const Schema   = mongoose.Schema;




const teamSchema = new Schema({
   QB: String,
   RB1: String,
   RB2: String,
   WR1: String,
   WR2: String,
   flex: String,
   DST: String,
   K: String,

});

const Team = mongoose.model("Team", teamSchema);



module.exports = Team;