// import React from 'react'
import { Link } from "react-router-dom";

// Context
import { useMainContext } from "../../utils/MainContext";

const BaseMenu = () => {
  // Category Item
  const { categoryItems } = useMainContext();

  return (
    <div className="base-menu">
      <h1 className="heading">Menu</h1>
      <div className="drinks-section">
        <h2 className="title">Drinks</h2>
        <div className="content">
          {categoryItems.map((item) => (
            <Link
              to={`drinks/${item.title}`}
              className="content-item"
              key={item.id}
            >
              <div className="item-inner">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="item-name">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseMenu;
