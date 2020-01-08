module.exports = {
  Query: {
    getUser(root, { userId }, { prisma }) {
      return prisma.user({ id: userId });
    }
  },
  Mutation: {
    createUser(root, args, { prisma }) {
      const { name, phone, lastname, document } = args;
        
      const user =  prisma.createUser({
        name,
        phone,
        lastname,
        document
      });

      return user
    }
  }
};
