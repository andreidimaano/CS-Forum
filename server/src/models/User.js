import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  likedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

export default model("User", userSchema);
