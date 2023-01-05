import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return `Error : ${error.message}`;
  }
  console.log(data);
  return (
    <div>
      <ul id="bookList">
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default BookList;
