import { Button, Flex, Stack, useColorModeValue } from "@chakra-ui/react";

const SignUpButtons = () => {
  return (
    <Flex align={"center"}>
      <Stack
        justify={"flex-end"}
        align={"center"}
        direction={"row"}
        spacing={6}
      >
        <Button
          as={"a"}
          fontSize={"md"}
          fontWeight={400}
          variant={"link"}
          href={"#"}
        >
          Sign In
        </Button>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={useColorModeValue("white", "#2E58FF")}
          bg={"transparent"}
          href={"#"}
          _hover={{
            bg: "#2E58FF",
            color: useColorModeValue("#2E58FF", "white"),
          }}
          border={2}
          borderStyle={"solid"}
          borderColor={useColorModeValue("white", "#2E58FF")}
        >
          Create Account
        </Button>
      </Stack>
    </Flex>
  );
};

export default SignUpButtons;
