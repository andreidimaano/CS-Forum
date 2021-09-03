import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    tests: [Test!]!
    getUsers: [User]
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  type Test {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    username: String!
    password: String
    token: String!
    email: String!
    createdAt: String!
    likedPosts: [ID!]
  }

  type Post {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
    comments: [Comment]!
    likes: [Like]!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  type Mutation {
    createTest(name: String!): Test!
    createUser(
      username: String!
      email: String!
      password: String!
      confirmPassword: String!
    ): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;
