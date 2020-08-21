const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    
    name: String,
    titles: [{}],
    
    participant: [{
        type: Schema.Types.ObjectId,
        ref: "Users",
    }],
    order: Number,

  });
  
  const PlaylistModel = mongoose.model("Playlist", playlistSchema);
  module.exports = PlaylistModel;