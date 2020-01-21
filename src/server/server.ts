import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import { ResolverMap } from './types/ResolverType';

import { createUser, updateUser, deleteUser } from './resolvers/User';
import { getUser, getAllUsers } from './queries/User';

import { typeDefs } from './types/typedefs';

const resolvers: ResolverMap = {
  Query: {
    getUser,
    getAllUsers
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

createConnection()
  .then(() =>
    server.start(() => console.log('Server is running on localhost:4000'))
  )
  .catch(error => console.log(error));
