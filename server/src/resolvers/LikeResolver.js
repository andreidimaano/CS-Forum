import Post from "../models/Post";
import checkAuth from "../../utils/auth";
import { UserInputError } from "apollo-server-express";

export const LikeResolvers = {
  Mutation: {
    likePost: async (_, { postId }, context) => {
      const { username } = checkAuth(context);
      const post = await Post.findById(postId);
      if (post) {
        // Check if this post has been liked by the user already
        if (post.likes.find((like) => like.username === username)) {
          // Unlike the post
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          // Like the post
          post.likes.push({
            username,
            createdAt: new Date(),
          });
        }
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
