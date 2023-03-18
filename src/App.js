import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [getTodo, setGetTodo] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:4000/data");
      setGetTodo(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(getTodo, "this is get todo data");
  return (
    <div>
      <form action="/" method="post">
        <input type="text" name="todo" id="" />

        <button type="submit">SUBMIT</button>
      </form>

      <div>
        <h1>TODO LIST</h1>

        <div>
          {getTodo.map((item, index) => (
            <div key={index}>{item.todo} </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
