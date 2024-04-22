// import React from 'react'
import { NavLink } from "react-router-dom";

const MenuNav = () => {
  return (
    <div className="menu-nav">
      <nav className="nav-bar">
        <ul className="list">
          <li>
            <NavLink to="/menu" className="list-item">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/featured" className="list-item">
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/previous" className="list-item">
              Previous
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/favorites" className="list-item">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuNav;
