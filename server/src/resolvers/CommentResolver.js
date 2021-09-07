import { AuthenticationError, UserInputError } from "apollo-server-express";
import mongoose from "mongoose";
import Post from "../models/Post";
import Comment from "../models/Comment"
import checkAuth from "../../utils/auth";

export const CommentResolvers = {
  Mutation: {
    createComment: async (_, { commentParentId, postParentId, rootPostId, body }, context) => {
      const user = checkAuth(context);

      // Check for empty comments
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }

      let post = undefined;

      if(commentParentId !== undefined) {
        post = await Comment.findById(commentParentId);
      } else if(postParentId !== undefined) {
        post = await Post.findById(postParentId);
      }

      if (post !== undefined) {
        console.log(post.comments);
        const newComment = new Comment({
          id: new mongoose.Types.ObjectId(),
          rootPost: rootPostId,
          body,
          user: user.id,
          username: user.username,
          createdAt: new Date(),
        })
        
        // Add new comment to the front of the comments array (sort by most frequent at top)
        post.comments.unshift(newComment.id);
        await post.save()

        const comment = await newComment.save();
        return comment;
      } else {
        throw new UserInputError("Parent post and comment not found");
      }
    },
    deleteComment: async (_, { commentParentId, postParentId, commentId }, context) => {
      const { username } = checkAuth(context);

      let post = undefined;

      if(commentParentId !== undefined) {
        post = await Comment.findById(commentParentId);
      } else if(postParentId !== undefined) {
        post = await Post.findById(postParentId);
      }

      if (post) {
        try {
          // Find the index of the comment
          console.log(post.comments)
          const commentIndex = post.comments.findIndex(
            (c) => c == commentId
          );
          // Check if this is the correct user trying to delete the comment
          const comment = await Comment.findById(commentId)
          console.log(comment)
          if (comment.username == username) {
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
