import { ApolloProvider } from "react-apollo";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import client from "./client/client";
import Root from "./components/Root/Root";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </>
  );
}

export default App;
