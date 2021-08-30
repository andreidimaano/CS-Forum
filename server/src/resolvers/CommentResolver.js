import { AuthenticationError, UserInputError } from "apollo-server-express";

import Post from "../models/Post";
import checkAuth from "../../utils/auth";

export const CommentResolvers = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuth(context);

      // Check for empty comments
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }

      const post = await Post.findById(postId);
      if (post) {
        console.log(post.comments);
        // Add new comment to the front of the comments array (sort by most frequent at top)
        post.comments.unshift({
          body,
          username,
          createdAt: new Date(),
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },
    deleteComment: async (_, { postId, commentId }, context) => {
      const { username } = checkAuth(context);
      const post = await Post.findById(postId);
      if (post) {
        try {
          // Find the index of the comment
          const commentIndex = post.comments.findIndex(
            (c) => c.id === commentId
          );
          // Check if this is the correct user trying to delete the comment
          if (post.comments[commentIndex].username === username) {
            // Remove the comment from the array
            post.comments.splice(commentIndex, 1);
            await post.save();
            return post;
          } else {
            throw new AuthenticationError("Action not allowed");
          }
        } catch (err) {
          throw new UserInputError("Comment not found");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
