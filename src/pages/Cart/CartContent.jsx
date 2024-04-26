// import React from 'react'

// Content components
import CartFooter from "../../components/Footer/CartFooter";
import CartData from "./CartData";
import EmptyCart from "./EmptyCart";

// context
import { useMainContext } from "../../utils/MainContext";

const CartContent = () => {
  const { cartItems } = useMainContext();

  return (
    <div className="cart-content">
      {cartItems.length === 0 ? <EmptyCart /> : <CartData />}
      <CartFooter />
    </div>
  );
};

export default CartContent;
