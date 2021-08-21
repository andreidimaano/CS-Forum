import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  createIcon,
  Image
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const NavbarSignUp = () => {
  const { isOpen, onToggle } = useDisclosure();

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
        justify={{base: 'space-between'}}
      >
        <Flex
          flex={{md: "auto" }}
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
        <Flex align={"center"}>
          <Image mr={2}boxSize="40px" src="./nodes.svg" alt="nodes" />
          <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              fontSize="2xl"
            >
              Kruskl
          </Text>
        </Flex>
        
        <Flex py={"16px"} display={{ base: "none", md: "flex" }} fontSize={"md"} mr={12} >
          Posts
        </Flex>
        <Flex align={"center"}>
          
          <Stack
            // flex={{ base: 1, md: 0 }}
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
                color: useColorModeValue("#2E58FF","white")
              }}
              border={2}
              borderStyle={"solid"}
              borderColor={useColorModeValue("white", "#2E58FF")}
            >
              Create Account
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavbarSignUp;

{
  /* <Flex
bg={useColorModeValue("white", "gray.800")}
color={useColorModeValue("gray.600", "white")}
borderBottom={1}
borderStyle={"solid"}
borderColor={useColorModeValue("gray.200", "gray.900")}
minH={"60px"}
py={{ base: 2 }}
px={{ base: 24 }}
borderBottom={1}
borderStyle={"solid"}
borderColor={useColorModeValue("gray.200", "gray.900")}
align={"center"}
justifyContent={"space-between"}
mr={"auto"}
ml={"auto"}
>

  <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
    <DesktopNav />
  </Flex>
</Flex>
<Stack
  flex={{ base: 1, md: 0 }}
  justify={"flex-end"}
  direction={"row"}
  spacing={6}
>
  <Button
    as={"a"}
    fontSize={"sm"}
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
    color={"white"}
    bg={"pink.400"}
    href={"#"}
    _hover={{
      bg: "pink.300",
    }}
  >
    Create Account
  </Button>
</Stack>
</Flex> */
}
