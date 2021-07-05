import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    mobileNumber: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);