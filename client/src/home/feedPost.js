import { useState } from "react";
import { Grid, GridItem, Box, Image} from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Stack, useColorModeValue, HStack, VStack, Button } from "@chakra-ui/react"
import { gql, useQuery } from '@apollo/client';
import { Text } from "@chakra-ui/react"

const FeedPost = ({post}) => {
  return (
    <Flex 
      direction="column"
      borderBottom={1}
      borderStyle={"solid"}
      py={"8px"}
      borderColor={useColorModeValue("gray.200", "gray.600")}
      p={4} w="100%"
    >
    <HStack mb="8px" spacing="6px">
      <Text fontWeight="bold" fontSize="md">@{post.username}</Text>
      <Text fontSize="md">·</Text>
      <Text fontSize="md">{post.createdAt}</Text>
    </HStack>
    <Text mb="8px" fontSize="md">{post.body}</Text>
    <HStack spacing="16px">
      <Button size="xs">Like</Button>
      <Button size="xs">Comment</Button>
    </HStack>
  </Flex>
  )
}

export default FeedPost