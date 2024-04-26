// import React from 'react'

// Images
import { Link } from "react-router-dom";
import cart from "../../assets/images/cart-img.png";

const EmptyCart = () => {
  return (
    <div className="empty-in">
      <div className="inner-sides">
        <div className="img">
          <img src={cart} alt="" />
        </div>
        <div className="content">
          <h1 className="title">Start your next order</h1>
          <p className="text">
            As you add menu items, they&apos;ll appear here. You&apos;ll have a
            chance to review before placing your order.
          </p>
          <Link to="/menu" className="btn">
            Add items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
