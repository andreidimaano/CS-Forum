import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  IconButton,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import SignUpButtons from "./SignUpButtons";
import Account from "./Account";
import { useState } from "react";

const Links = ["Feed", "Explore Topics", "Your Threads"];

const NavbarSignUp = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoggedIn, setIsLoggedin] = useState(false);

  return (
    <Box
      borderBottom={1}
      borderStyle={"solid"}
      py={"8px"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        px={"16px"}
        align={"center"}
        ml={"auto"}
        mr={"auto"}
        maxW={"1280px"}
        justify={{ base: "space-between" }}
      >
        <Flex
          flex={{ md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <HStack spacing={8} alignItems={"center"}>
          <Link
            as={ReactLink}
            to={`/`}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Flex>
              <Image mr={2} boxSize="40px" src="./nodes.svg" alt="nodes" />
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
                fontSize="2xl"
              >
                Kruskl
              </Text>
            </Flex>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavbarLink route={"feed"} display={"Feed"} />
            <NavbarLink route={"explore"} display={"Explore Topics"} />
          </HStack>
        </HStack>
        {isLoggedIn ? <Account /> : <SignUpButtons />}
      </Flex>
    </Box>
  );
};

export default NavbarSignUp;
