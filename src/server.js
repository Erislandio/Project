const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("../generated/prisma-client");
const chalk = require('chalk')
const resolvers = require("./resolvers/index");

const server = new GraphQLServer({
  typeDefs: "./src/graphql/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log(chalk.green.bold.underline(`server online http://localhost:4000`)));
