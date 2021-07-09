import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

  text: String,
  user: { 
    type: mongoose.Schema.Types,
    ref: "user"
  },
  createdAt: Date,
  image: String,
  video: String,
  audio: String,
  sent: Boolean,
  received: Boolean,
  chatroom: { 
    type: mongoose.Schema.Types,
    ref: "chatroom"
  }
});

export default mongoose.model("messages", messageSchema);