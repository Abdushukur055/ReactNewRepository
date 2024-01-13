import React, { useEffect, useState } from "react";
import Users from "./component/Users";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Posts from "./component/Posts";
import Photos from "./component/Photos";
import Albums from "./component/Albums";
import ".//component/first.css";
import Todos from "./component/Todos";
import Products from "./component/Products";
import Single_product from "./component/Single_product";
import "./component/first.product.css";

const App = () => {
  const [links, setLinks] = useState([
    { id: 1, title: "Users", path: "users" },
    { id: 2, title: "Posts", path: "posts" },
    { id: 3, title: "Photos", path: "photos" },
    { id: 4, title: "Albums", path: "albums" },
    { id: 5, title: "Todos", path: "todos" },
    { id: 6, title: "Product", path: "product" },
  ]);
  const [active, setActive] = useState(1);

  const sidebarBtn = (id) => {
    setActive(id);
    localStorage.setItem("id", id);
  };

  useEffect(() => {
    let val = +localStorage.getItem("id");
    if (val) {
      setActive(val);
    } else {
      setActive(1);
    }
  });
  return (
    <div className="header_box">
      <div className="sidebar">
        {links.map((item, index) => {
          return (
            <div>
              <button
                className={active === item.id ? "btn2" : ""}
                onClick={() => sidebarBtn(item.id)}
              >
                <Link className="link" to={item.path}>
                  {item.title}
                </Link>
              </button>
            </div>
          );
        })}
      </div>
      <div className="box4">
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="product" element={<Products />} />
          <Route path="single_product/:id" element={<Single_product />} />
          <Route path="posts" element={<Posts />} />
          <Route path="photos" element={<Photos />} />
          <Route path="albums" element={<Albums />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
