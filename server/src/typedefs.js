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
  }

  type Post {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
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
  }
`;
