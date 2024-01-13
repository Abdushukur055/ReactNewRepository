import axios from "axios";
import React, { useEffect, useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_start=${count}&_limit=2`)
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      });
  }, [count]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered table-hover table-stripped">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Address</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.phone}</td>
                      <td>{item.website}</td>
                      <td>{item.address.city}</td>
                      <td>{item.company.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>+</button>
            <button className="btn btn-danger m-2" onClick={() => setCount(prev => prev - 1)}>-</button>
            <h1>{count}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
