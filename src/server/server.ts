import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import { ResolverMap } from './types/ResolverType';
const session = require('express-session');

import { signup, createUser, updateUser, deleteUser } from './resolvers/User';
import { getUser, getAllUsers } from './queries/User';
import { typeDefs } from './types/typedefs';

const startServer = async () => {
  const resolvers: ResolverMap = {
    Query: {
      getUser,
      getAllUsers
    },
    Mutation: {
      signup,
      createUser,
      updateUser,
      deleteUser
    }
  };

  const opts = {
    port: 4000,
    cors: {
      credentials: true,
      origin: ['http://localhost:1234']
    }
  };

  const server = new GraphQLServer({ typeDefs, resolvers });

  await createConnection();

  server.start(opts, () => console.log('Server is running on localhost:4000'));
};

startServer();
