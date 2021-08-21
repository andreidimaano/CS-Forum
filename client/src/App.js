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
        <div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
