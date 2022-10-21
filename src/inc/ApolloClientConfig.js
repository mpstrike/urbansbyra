import { ApolloClient, InMemoryCache } from '@apollo/client';



 export const client = new ApolloClient({
    uri: 'http://localhost/urbanstema/graphql',
  cache: new InMemoryCache()
});