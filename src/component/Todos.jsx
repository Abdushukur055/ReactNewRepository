import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${count}&_limit=10`).then((response) => {
      setTodos(response.data);
    });
  });
  return (
    <div className="container">
      <h1>Todos</h1>

      <table className="table table-bordered table-hover table-stripped">
        <thead>
          <tr>
            <th>T/R</th>
            <th>UserId</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={() => setCount(prev => prev + 1)}>+</button>
      <button className="btn btn-success" onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
};

export default Todos;
