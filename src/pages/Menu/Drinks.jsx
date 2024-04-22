// import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

// Menu Components
import MenuNav from "./MenuNav";
import CategorySideBar from "./CategorySideBar";

const Drinks = () => {
  const { id } = useParams();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/coffee/?subcategory=${id}`)
      .then((res) => {
        setDrinks(res.data);
      })
      .catch((err) => ("Qaqa içkilərdə error var!!!", err));
  }, [id]);

  console.log(drinks);

  return (
    <>
      <Helmet>
        <title>{id}: Starbucks Coffee Company</title>
      </Helmet>
      <MenuNav />
      <section className="menu-main">
        <CategorySideBar />
        <div className="drinks-base">
          <nav className="breadcrumbs">
            <ul>
              <li>
                <Link to="/menu">Menu</Link>
                <span>/</span>
              </li>
              <li>
                <p>{id}</p>
              </li>
            </ul>
          </nav>
          <h1 className="heading">{id}</h1>
          <div className="drinks-section">
            <h2 className="title">Drinks</h2>
            <div className="content">
              {drinks.map((item) => (
                <Link
                  to={`/menu/product/${item.id}`}
                  className="content-item"
                  key={item.id}
                >
                  <div className="item-inner">
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <h3 className="item-name">{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Drinks;
