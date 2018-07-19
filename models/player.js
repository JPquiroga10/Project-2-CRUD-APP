const mongoose = require("mongoose");
const Schema   = mongoose.Schema;




const playerSchema = new Schema({
    Player: String,
    Position: String,
    Team: String,
    passAtt: String,
    passCmp: String,
    passYds: String,
    passTds: String,
    ints: String,
    rushAtt: String,
    rushYds: String,
    rushTds: String,
    rec: String,  
    recYds: String,
    recTds: String,
    sack: String,
    INT: String,
    FR: String,
    FF: String,
    TD: String,
    safety: String,
    PA: String,
    ydsAgn: String,
    FG: String,
    FGA: String,
    XPT: String,
    FL: String,
    FPTS: String,
    comments: [{commenter: String, content: String}]
});

const Player = mongoose.model("Player", playerSchema);



module.exports = Player;