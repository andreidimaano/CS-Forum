import { Center, Box, Button, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { InputField } from "../utils/InputField";
import { useMutation } from "@apollo/client";
import { gql } from "graphql-tag";

function Login() {
  const [loginUser] = useMutation(LOGIN_USER, {
    errorPolicy: "all",
  });

  return (
    <Box mt={8} mx="auto" maxW="700px" w="100%">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          // Try to login the user using graphQL mutation
          const response = await loginUser({
            variables: {
              username: values.username,
              password: values.password,
            },
          });

          // Set the errors if there are any
          if (response.errors) {
            if (response.errors[0].extensions.errors) {
              setErrors(response.errors[0].extensions.errors);
            }
          }
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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
      likedPosts
    }
  }
`;

export default Login;
