import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers';
import { typeDefs } from './schema';

// const corsOptions = {
//     origin: "http://localhost:3000",
//     credentials: true
// };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // cors: corsOptions
});

server.listen().then(({ url }) => {
    console.log(`Apollo server is ready at ${url}`);
});