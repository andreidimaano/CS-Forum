import { Test } from "../models/Test";
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
      const user = new User({
        username,
        email,
        password,
        createdAt: new Date(),
      });
      await user.save();
      console.log(user);
      return user;
    },
  },
};
