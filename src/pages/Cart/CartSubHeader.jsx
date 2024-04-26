// import React from 'react'
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/icons/starbucks-logo.svg";

// Icons
import { HiOutlineChevronLeft } from "react-icons/hi";
import { GoChevronDown } from "react-icons/go";

// context
import { useMainContext } from "../../utils/MainContext";

const CartSubHeader = () => {
  const { cartItems } = useMainContext();

  return (
    <div className="cart-header">
      <div className="cart-navigation">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <Link to="/menu" className="menu-btn">
          <HiOutlineChevronLeft className="icon" /> Back to menu
        </Link>
      </div>
      <div className="mobile-nav">
        <Link to="/menu">
          <HiOutlineChevronLeft className="icon" />
        </Link>
      </div>
      <div className="cart-head-side">
        <div className="header-info">
          <div className="info-inner">
            <h1 className="review">Review Order ({cartItems.length})</h1>
            <div className="choose-store">
              <Link className="select-box" to="/find-store">
                <div className="text-box">
                  <span className="title">For item availability</span>
                  <span className="text">Choose a store</span>
                  <span className="title mobile-title">
                    For item availability, choose a store
                  </span>
                </div>
                <GoChevronDown className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSubHeader;
