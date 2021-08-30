import { AuthenticationError } from "apollo-server-express";

import jwt from "jsonwebtoken";
import { secret } from "../src/constants";

export default (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    // Bearer
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, secret);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid or Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]'");
  }
  throw new Error("Authorization header must be povided");
};
