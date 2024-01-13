import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./first.css"

export default function Albums() {
  const [albums, setAlbums] = useState([])
  const [count, setCount] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?_page=${count}&_limit=30`).then((response) => {
      setAlbums(response.data)
    })
  }, [])
  return (
    <div>
      <div className='box2'>
        {
          albums.map((item, index) => {
            return <div className="box1">
              <h3>{item.id}</h3>
              <h3>{item.title}</h3>
            </div>
          })
        }
      </div>
      <button className='btn btn-danger' onClick={() => setCount(prev => prev + 1)}>+</button>
      <button className='btn btn-success' onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Abdushukur055/React_repository.git
// git push -u origin main