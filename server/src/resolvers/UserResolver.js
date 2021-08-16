import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { secret } from "../constants";
import User from "../models/User";

export const UserResolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      // Encrypt the password
      password = await bcrypt.hash(password, 12);

      const user = new User({
        username,
        email,
        password,
        createdAt: new Date(),
      });

      const res = await user.save();

      // Authentication token
      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username,
        },
        secret,
        { expiresIn: "1h" }
      );
      console.log(user);

      return {
        ...res._doc,
        id: res.id,
        token,
      };
    },
  },
};
