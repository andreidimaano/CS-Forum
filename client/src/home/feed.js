import { useState } from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Stack, useColorModeValue, HStack, VStack } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { Text } from "@chakra-ui/react";
import FeedPost from "./feedPost";

const GET_POSTS = gql`
  query {
    getPosts {
      username
      body
      comments
      likes {
        username
      }
      createdAt
    }
  }
`;

const Feed = ({}) => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Grid
      minH={"calc(100vh - 57px)"}
      templateColumns="1fr minmax(200px, 600px) 1fr"
    >
      <Box w="100%" h="3000px"></Box>
      <VStack mt={"1rem"} spacing="0px" w="100%" h="3000px">
        {data.getPosts.map((post) => (
          <FeedPost post={post} />
        ))}
      </VStack>
      <Box w="100%" h="3000px" />
    </Grid>
  );
};

export default Feed;
