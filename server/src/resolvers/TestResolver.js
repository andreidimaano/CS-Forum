import { Test } from "../models/Test";

export const TestResolvers = {
  Query: {
    hello: () => "hi",
    tests: () => Test.find(),
  },
  Mutation: {
    createTest: async (_, { name }) => {
      const test = new Test({ name: name });
      await test.save();
      console.log(test);
      return test;
    },
  },
};
