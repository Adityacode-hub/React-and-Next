"use Client"
import ServerComponent from "./components/server-com";
export default async function HomePage() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  const res = await data.json();

  console.log(res);

  return (
    <div>
      <h1>{res.title}</h1>
      <p>User ID: {res.userId}</p>
      <p>Completed: {res.completed ? "Yes" : "No"}</p>
      <ServerComponent/>
    </div>
  );
}