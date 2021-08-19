import mongoose from "mongoose";

const { model, Schema } = mongoose;

const postSchema = new Schema({
  username: String,
  createdAt: String,
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

export default model("Post", postSchema);
