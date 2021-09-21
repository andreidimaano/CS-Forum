import {
  Avatar,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { CgProfile } from "react-icons/cg";

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
          <Avatar size={"sm"} src={<CgProfile />} />
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
          <ColorModeSwitcher p={0} />
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
