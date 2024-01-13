import axios from "axios";
import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [count, setCount] = useState(3);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${count}&_limit=20`
      )
      .then((response) => {
        setPhotos(response.data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Photos</h1>
          <table className="table table-bordered table-hover table-stripped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Album Id</th>
                <th>Id</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {photos.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.albumId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="btn btn-success"
          >
            +
          </button>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="btn btn-danger"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photos;
