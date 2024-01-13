import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./first.product.css"
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data)
      console.log(res.data);
    })
  }, [])
  return (
    <div className='wrapper'>
      <h1 className='text-center'>Products</h1>
      <div className="box10">
        {
          products.map((item) => {
            return <div className="box20">
              <img src={item.image} className='img' alt="products" lazy="loading" />
              <p className='item_desc'>{item.title}</p>
              <Link className='btn btn-success' to={`/single_product/${item.id}`}>View Details</Link>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default Products;
