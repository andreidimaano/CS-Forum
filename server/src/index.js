import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { typeDefs } from "./typedefs";
import { mongoUrl } from "./constants";
import { UserResolvers } from "./resolvers/UserResolver";
import { PostResolvers } from "./resolvers/PostResolver";
import { CommentResolvers } from "./resolvers/CommentResolver";
import { LikeResolvers } from "./resolvers/LikeResolver";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers: [UserResolvers, PostResolvers, CommentResolvers, LikeResolvers],
    context: ({ req }) => ({ req }),
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
