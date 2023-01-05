import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getAuthorsQuery } from "../queries/queries";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return `Error : ${error.message}`;
  }
  console.log(data);
  return (
    <form>
      <label>Book Name : </label>
      <input type="text" id="bookName" />
      <br />
      <label>Genre : </label>
      <input type="text" id="Genre" />
      <br />
      <label>Author : </label>
      <select id="author">
        <option value="">Select Author</option>
        {data.authors.map((author) => {
          return (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default AddBook;
