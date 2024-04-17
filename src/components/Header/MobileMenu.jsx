// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Icons
import { MdLocationOn } from "react-icons/md";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Menu Start  */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/rewards">Rewards</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/gift-cards">Gift Cards</NavLink>
          </li>
        </ul>
        <div className="navigation-side">
          <div className="for-user">
            <Link
              to="/login"
              className="user-btn login"
              onClick={() => setIsOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="user-btn register"
              onClick={() => setIsOpen(false)}
            >
              Join now
            </Link>
          </div>
          <Link to="/find-store" className="find-store" onClick={() => setIsOpen(false)}>
            <MdLocationOn className="loc-icon" />
            <p>Find a store</p>
          </Link>
        </div>
      </nav>

      {/* overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`overlay ${isOpen ? "open" : ""}`}
      ></div>
      {/* Mobile Menu End  */}
    </>
  );
};

// PropTypes
MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileMenu;
