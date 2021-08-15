import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./typedefs";
import { TestResolvers } from "./resolvers/TestResolver";
import mongoose from "mongoose";
import { mongoUrl } from "./constants";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers: [TestResolvers],
  });

  server.applyMiddleware({ app });

  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
