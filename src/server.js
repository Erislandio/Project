const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("../generated/prisma-client");
const resolvers = require("./resolvers/index");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(() => console.log(`Server online`));
