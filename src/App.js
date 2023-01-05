import React from "react";
import BookList from "./components/booklist";
import AddBook from "./components/addbook";
import AddAuthor from "./components/addAuthor";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Book List</h1>
        <BookList />
        <br />
        <br />
        <h1>Add Book</h1>
        <AddBook />
        <br />
        <h1>Add Author</h1>
        <AddAuthor />
      </div>
    </ApolloProvider>
  );
}

export default App;
