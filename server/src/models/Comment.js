import mongoose from "mongoose";

const { model, Schema } = mongoose;

const commentSchema = new Schema({
  username: String,
  createdAt: String,
  body: String,
  rootPost: {
      type: Schema.Types.ObjectId,
      ref: "posts"
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments",
    }
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

export default model("Comment", commentSchema);
