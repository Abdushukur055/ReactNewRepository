import axios from "axios";
import React, { useEffect, useState } from "react";

const Single_product = () => {

  const [single, setSingle] = useState([]);
  useEffect(() => {
    let id = window.location.href.split("/")[4];
    console.log(id);
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setSingle(res.data)
      console.log(res.data);
    });
  }, []);

  return <div className="single_header" >
    <div className="single_box">
      <h3><i>Description:</i>  {single.description}</h3>
    </div>
    <div className="single_box">
      <h3><i>Category:</i>  {single.category}</h3>
    </div>
    <div className="single_box">
      <h3><i>Price:</i>  {single.price}</h3>
    </div>
   
  </div>;
};

export default Single_product;
