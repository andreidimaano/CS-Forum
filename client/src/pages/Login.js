import { Center, Box, Button, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { InputField } from "../utils/InputField";

function Login() {
  return (
    <Box mt={8} mx="auto" maxW="700px" w="100%">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setErrors }) => {
          // call login and set errors if there are errors or not (values.username, values.password)
          console.log(values);
          setErrors({
            username: "error",
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Center mb={4}>Login</Center>
            <Box>
              <InputField
                name="username"
                placeholder="username"
                label="Username"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Center>
              <Button mt={4} type="submit" isLoading={isSubmitting}>
                Login
              </Button>
            </Center>
            <Center mt={4}>
              <Link as={ReactLink} to={`/signup`}>
                Don't already have an account? Sign up
              </Link>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Login;
