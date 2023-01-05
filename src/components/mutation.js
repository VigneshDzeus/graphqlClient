import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

function Mutation({ string }) {
  let query = gql`
    ${string}
  `;
  const { data } = useQuery(query);
  console.log(data);
  return "";
}

export default Mutation;
