import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  // chatroom: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: "Chatroom is required!",
  //   ref: "Chatroom",
  // },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: "Chatroom is required!",
  //   ref: "User",
  // },
  // message: {
  //   type: String,
  //   required: "Message is required!",
  // },

  text: String,
  user: { 
    name: String,
  },
  createdAt: Date,
  image: String,
  video: String,
  audio: String,
  sent: Boolean,
  received: Boolean
});

export default mongoose.model("messages", messageSchema);