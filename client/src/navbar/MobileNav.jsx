import React from "react";
import {
  Box,
  Flex,
  HStack,
  Collapse,
  Stack,
  IconButton,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import NavbarLink from "./NavbarLink";

const MobileNav = () => {
  return (
    <Box
      mt={4}
      borderTop={1}
      borderStyle={"solid"}
      p={4}
      display={{ md: "none" }}
      borderColor={useColorModeValue("gray.200", "gray.600")}
    >
      <Stack as={"nav"} spacing={4}>
        <NavbarLink route={"feed"} display={"Feed"} />
        <NavbarLink route={"explore"} display={"Explore Topics"} />
      </Stack>
    </Box>
  );
};

export default MobileNav;
