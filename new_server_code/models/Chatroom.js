import mongoose from "mongoose";

const chatroomSchema = new mongoose.Schema({
  name: 'String',
  description: 'String',
  icon: 'String',
  isBroadcast: Boolean,
  users: Array
  
});

export default mongoose.model("chatroom", chatroomSchema);