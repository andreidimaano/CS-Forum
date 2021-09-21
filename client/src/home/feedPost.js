import { useState, useEffect } from "react";
import { Grid, GridItem, Box, Image} from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Stack, useColorModeValue, HStack, VStack, Button } from "@chakra-ui/react"
import { gql, useQuery } from '@apollo/client';
import { Text } from "@chakra-ui/react"
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
import moment from 'moment'

const FeedPost = ({post, user}) => {
  console.log("post"); console.log(post)
  const [likedPost, setLikedPost] = useState(false)
  
  useEffect(() => {
    let isLiked = false;
    post.likes.forEach(like => {
      if(like === user) {
        isLiked = true;
      }
    })

    setLikedPost(isLiked)
  }, [post, user])

  return (
    <Flex 
      direction="column"
      border={1}
      borderStyle={"solid"}
      py={"8px"}
      borderColor={useColorModeValue("gray.200", "gray.600")}
      p={4} w="100%"
      mb={'1rem'}
    >
    <HStack mb="8px" spacing="6px">
      <Text fontWeight="bold" fontSize="md">@{post.username}</Text>
      <Text fontSize="md">·</Text>
      <Text fontSize="md">{moment(new Date(post.createdAt)).startOf('day').fromNow()}</Text>
    </HStack>
    <Text mb="8px" fontSize="md">{post.body}</Text>
    <HStack spacing="16px">
      <Flex><Button size="xs">{likedPost ? <BsHeartFill size="1.15em" color="red"/>  : <BsHeart size="1.15em"/>}</Button>
      <Text ml={'0.35rem'}>{post.likes.length}</Text></Flex>
      <Flex><Button size="xs"><AiOutlineComment size="1.5em"/></Button><Text ml={'0.35rem'}>{post.comments.length}</Text></Flex>
     
    </HStack>
  </Flex>
  )
}

export default FeedPost