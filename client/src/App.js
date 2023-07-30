import "./App.css";
import { useQuery, gql } from "@apollo/client";

const Query = gql`
  query getTodos {
    getTodos {
      id
      title
      user {
        name
        id
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(Query);
  if (loading) return <h1>loading..</h1>;
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
