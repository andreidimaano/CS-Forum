import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import NavbarSignUp from "./navbar/Navbar";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box height="100vh">
          <NavbarSignUp />
          <ColorModeSwitcher pos="absolute" bottom="8" right="8" />
          <Switch>
            <Route path="/feed"></Route>
            <Route path="/explore"></Route>
            <Route path="/threads"></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/profile"></Route>
          </Switch>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/vitaly-gorbachev"
              title="Vitaly Gorbachev"
            >
              Vitaly Gorbachev
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
