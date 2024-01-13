import axios from "axios";
import React, { useState, useEffect } from "react";
import "../component/first.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          setPosts(response.data);
          console.log(response.data);
        });
    };
  }, [])
  return (
    <div>
      <div className="box2">
        {
          posts.map((item, index) => {
            return <div className="box1">
              <h3>{item.id}</h3>
              <h3>{item.title}</h3>
            </div>
          })
        }
      </div>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>+</button>
      <button className="btn btn-danger" onClick={() => setCount(prev => prev - 1)}>-</button>
      <h1>{count}</h1>
    </div>
  );
}
