import Post from "../models/Post";
import checkAuth from "../../utils/auth";
import { UserInputError } from "apollo-server-express";
import User from "../models/User";

export const LikeResolvers = {
  Mutation: {
    likePost: async (_, { postId }, context) => {
      const { id, username } = checkAuth(context);
      const post = await Post.findById(postId);
      const user = await User.findById(id);

      if (post) {
        // Check if this post has been liked by the user already
        if (post.likes.find((like) => like.username === username)) {
          // Unlike the post
          post.likes = post.likes.filter((like) => like.username !== username);
          // Add the post to user's liked posts
          const likeIndex = user.likedPosts.findIndex(
            (like) => like === postId
          );
          user.likedPosts.splice(likeIndex, 1);
        } else {
          // Like the post
          post.likes.push({
            username,
            createdAt: new Date(),
          });
          // Remove the post from the user's liked posts
          user.likedPosts.push(postId);
        }
        await post.save();
        await user.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
