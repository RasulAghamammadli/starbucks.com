// import React from 'react'
import { Link } from "react-router-dom";

// Context
import { useMainContext } from "../../utils/MainContext";

const CategorySideBar = () => {
  // Category Item
  const { categoryItems } = useMainContext();

  return (
    <nav className="category-side-bar">
      <div className="side-box">
        <h3 className="title">Drinks</h3>
        <ul className="side-list">
          {categoryItems.map((item) => (
            <li key={item.id}>
              <Link to={`/menu/drinks/${item.title}`} className="list-item">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-box">
        <h3 className="title">Food</h3>
        <ul className="side-list">
          <li>
            <Link className="list-item">Hot Breakfast</Link>
          </li>
          <li>
            <Link className="list-item">Oatmeal & Yogurt</Link>
          </li>
          <li>
            <Link className="list-item">Bakery</Link>
          </li>
          <li>
            <Link className="list-item">Lunch </Link>
          </li>
          <li>
            <Link className="list-item">Snacks & Sweets</Link>
          </li>
        </ul>
      </div>
      <div className="side-box">
        <h3 className="title">At Home Coffee</h3>
        <ul className="side-list">
          <li>
            <Link className="list-item">Whole Bean</Link>
          </li>
          <li>
            <Link className="list-item">VIA® Instant</Link>
          </li>
        </ul>
      </div>
      <div className="side-box">
        <h3 className="title">Merchandise</h3>
        <ul className="side-list">
          <li>
            <Link className="list-item">Cold Cups</Link>
          </li>
          <li>
            <Link className="list-item">Tumblers</Link>
          </li>
          <li>
            <Link className="list-item">Mugs</Link>
          </li>
          <li>
            <Link className="list-item">Others</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategorySideBar;
