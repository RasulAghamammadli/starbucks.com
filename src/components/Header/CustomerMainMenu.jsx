// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

// Images
import Logo from "../../assets/icons/starbucks-logo.svg";

// Icons
import { MdLocationOn } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";

const CustomerMainMenu = ({ isOpen, setIsOpen }) => {
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
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/rewards">Rewards</NavLink>
              </li>
              <li>
                <NavLink to="/gift-cards">Gift Cards</NavLink>
              </li>
            </ul>
          </div>
          <div className="navigation-side">
            <div className="language-toggle">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <GrLanguage className="lang-icon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="head">
                    <p>Choose your region</p>
                    <FaXmark className="cancel-btn" />
                  </div>
                  <div className="content">
                    <div className="region">
                      <div className="title">Usa:</div>
                      <Link className="lang active-lang">
                        English <IoCheckmarkSharp className="active-icon" />
                      </Link>
                    </div>
                    <div className="region">
                      <div className="title">Canada:</div>
                      <Link className="lang">English</Link>
                      <Link className="lang">Français</Link>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <NavLink
              to="/find-store"
              className="find-store customer-find-store"
            >
              <MdLocationOn className="loc-icon" />
              <p>Find a store</p>
            </NavLink>
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
CustomerMainMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default CustomerMainMenu;
