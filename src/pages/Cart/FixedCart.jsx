// import React from 'react'
import { Link } from "react-router-dom";

// Icons
import { GoChevronDown } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import { useMainContext } from "../../utils/MainContext";

const FixedCart = () => {
  const { cartItems } = useMainContext();

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
        <Link to="/cart" className="to-cart-btn">
          <BsBag className="bag-icon" />
          {cartItems.length > 0 ? (
            <span className="total"> {cartItems.length}</span>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default FixedCart;
