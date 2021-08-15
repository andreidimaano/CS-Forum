import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./typedefs";
import { TestResolvers } from "./resolvers/TestResolver";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers: [TestResolvers],
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
