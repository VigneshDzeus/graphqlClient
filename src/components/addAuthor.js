import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";

function AddAuthor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  //   let ADD_Author = gql`
  //     mutation {
  //       addAuthor(name: blah, age: 23) {
  //         name
  //       }
  //     }
  //   `;
  //   const [newAuthor, { loading, data }] = useLazyQuery(ADD_Author);

  return (
    <form>
      <label>Author Name : </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label>Age : </label>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          //newAuthor();
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddAuthor;
