const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    
    name: String,
    membersNumber: Number,
    
    participants: [{
        type: Schema.Types.ObjectId,
        ref: "Users",
        order:Number,
    }]
  });
  
  const TeamModel = mongoose.model("Team", teamSchema);
  module.exports = TeamModel;