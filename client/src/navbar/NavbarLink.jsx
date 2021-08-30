import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const NavbarLink = ({ route, display }) => {
  return (
    <Link
      as={ReactLink}
      to={`/${route}`}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {display}
    </Link>
  );
};

export default NavbarLink;
