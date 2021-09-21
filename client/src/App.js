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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import NavbarSignUp from "./navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./home/feed";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Box height="100vh">
            <NavbarSignUp />
            <Switch>
              {/* <Route path="/">
                <Feed />
              </Route> */}
              <Route path="/feed">
                <Feed />
              </Route>
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
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
