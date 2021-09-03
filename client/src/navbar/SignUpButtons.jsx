import { Button, Flex, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const SignUpButtons = () => {
  return (
    <Flex align={"center"}>
      <Stack
        justify={"flex-end"}
        align={"center"}
        direction={"row"}
        spacing={6}
      >
        <Link
          as={ReactLink}
          to={`/login`}
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
        >
          Sign In
        </Link>
        <Link as={ReactLink} to={`/signup`}>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={useColorModeValue("#2E58FF", "#2E58FF")}
            bg={"transparent"}
            href={"#"}
            _hover={{
              bg: "#2E58FF",
              color: useColorModeValue("white", "white"),
            }}
            border={2}
            borderStyle={"solid"}
            borderColor={useColorModeValue("#2E58FF", "#2E58FF")}
          >
            Create Account
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
};

export default SignUpButtons;
