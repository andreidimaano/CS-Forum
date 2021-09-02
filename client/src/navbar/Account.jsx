import {
  Avatar,
  Button,
  Flex, Link, Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const Account = () => {
  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            size={"sm"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </MenuButton>
        <MenuList>
          <Link
            as={ReactLink}
            to={`/profile`}
            _hover={{
              textDecoration: "none",
            }}
          >
            <MenuItem>Your Profile</MenuItem>
          </Link>
          <MenuDivider />
          <Link
            as={ReactLink}
            to={`/signout`}
            _hover={{
              textDecoration: "none",
            }}
          >
            <MenuItem>Sign out</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Account;
