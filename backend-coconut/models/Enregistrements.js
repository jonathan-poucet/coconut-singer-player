const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enregistrementsSchema = new Schema({
    
    name: String,
    titles: [{}],
    
    participant: [{
        type: Schema.Types.ObjectId,
        ref: "Users",
    }],
    
  });
  
  const EnregistrementModel = mongoose.model("Enregistrement", enregistrementsSchema);
  module.exports = EnregistrementModel;