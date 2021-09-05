import { Center, Box, Button, Link } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { InputField } from "../utils/InputField";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

function Signup() {
  const [createUser] = useMutation(CREATE_USER, {
    errorPolicy: "all",
  });
  return (
    <Box mt={8} mx="auto" maxW="700px" w="100%">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          // Try to create a user using the createUser mutation
          const response = await createUser({
            variables: {
              username: values.username,
              email: values.email,
              password: values.password,
              confirmPassword: values.confirmPassword,
            },
          });

          console.log(response);
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
            <Center mb={4}>Sign up</Center>
            <Box>
              <InputField
                name="username"
                placeholder="username"
                label="Username"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="email"
                placeholder="email"
                label="Email Address"
                type="email"
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
            <Box mt={4}>
              <InputField
                name="confirmPassword"
                placeholder="confirmed password"
                label="Confirmed Password"
                type="confirmPassword"
              />
            </Box>
            <Center>
              <Button mt={4} type="submit" isLoading={isSubmitting}>
                Sign up
              </Button>
            </Center>
            <Center mt={4}>
              <Link as={ReactLink} to={`/login`}>
                Already have an account? Log in
              </Link>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      username
      token
      email
      createdAt
      likedPosts
    }
  }
`;

export default Signup;
