const {
  Query: { getUser },
  Mutation: { createUser }
} = require("./User/user");

const resolvers = {
  Query: {
    getUser
  },
  Mutation: {
    createUser
  }
};

module.exports = resolvers;
