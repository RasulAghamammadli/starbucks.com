// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Images
import Logo from "../../assets/icons/starbucks-logo.svg";

// Icons
import { MdLocationOn } from "react-icons/md";

const MainMenu = ({ isOpen, setIsOpen }) => {
  // toggleBurger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    // Main Menu Start
    <nav className="main-nav">
      <div className="container">
        <div className="nav-center">
          <div className="menu-side">
            <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
              <img src={Logo} alt="" />
            </Link>
            <ul className="nav-list">
              <li>
                <NavLink to="./menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="./rewards">Rewards</NavLink>
              </li>
              <li>
                <NavLink to="./gift">Gift Cards</NavLink>
              </li>
            </ul>
          </div>
          <div className="navigation-side">
            <NavLink to="/findastore" className="find-store">
              <MdLocationOn className="loc-icon" />
              <p>Find a store</p>
            </NavLink>
            <div className="for-user">
              <Link to="login" className="user-btn login">
                Sign in
              </Link>
              <Link to="register" className="user-btn register">
                Join now
              </Link>
            </div>
          </div>
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="hover-bg"></div>
            <div className="bars">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // Main Menu End
  );
};

// PropTypes
MainMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MainMenu;
