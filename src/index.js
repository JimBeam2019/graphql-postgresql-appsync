import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
});

server.listen().then(({ url }) => {
  console.log(`Apollo server is ready at ${url}`);
});
