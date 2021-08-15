import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import NavbarSignUp from "./navbar/navbar";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box height="100vh">
        <NavbarSignUp />
        <ColorModeSwitcher pos="absolute" bottom="8" right="8" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
