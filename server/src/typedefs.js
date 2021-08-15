import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    tests: [Test!]!
  }

  type Test {
    id: ID!
    name: String!
  }

  type Mutation {
    createTest(name: String!): Test!
  }
`;
