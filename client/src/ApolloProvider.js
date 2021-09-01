import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
    ,
  </ApolloProvider>
);
