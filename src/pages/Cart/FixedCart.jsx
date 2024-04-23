// import React from 'react'
import { Link } from "react-router-dom";

// Icons
import { GoChevronDown } from "react-icons/go";
import { BsBag } from "react-icons/bs";

const FixedCart = () => {
  return (
    <div className="fixed-cart">
      <div className="fixed-inner">
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
        <div className="to-cart-btn">
          <BsBag className="bag-icon" />
          <span className="total">1</span>
        </div>
      </div>
    </div>
  );
};

export default FixedCart;
