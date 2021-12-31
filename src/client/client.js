import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const httpLink = new HttpLink({ uri: "https://api.ss.dev/resource/api" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
