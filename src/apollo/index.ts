import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({ uri: `${process.env.REACT_APP_API_URL}coffee` });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('userToken') || null
    }
  });
  return forward(operation);
});

const logoutLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) { graphQLErrors.map(({ message, locations, path }) => (console.log('[GraphQL error]: Message: ' + message + ', Location:' + { ...locations } + ', Path:' + path))); }
  if (networkError) console.log(`[Network error]: ${networkError}`, networkError);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([logoutLink.concat(authMiddleware), logoutLink.concat(httpLink)])
});
