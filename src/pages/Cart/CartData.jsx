// import React from 'react'\

// Icons
import { IoStarSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

// context
import { useMainContext } from "../../utils/MainContext";

const CartData = () => {
  const { cartItems, localStorageClear, incrementCart, removeFromCart } =
    useMainContext();

  return (
    <div className="cart-data">
      <div className="data-content">
        <div className="content-inner">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-in">
                <div className="item-info">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="info-box">
                    <h3 className="title">{item.name}</h3>
                    <div className="item-options">
                      <p className="size">{item.size.size}</p>
                      <p className="rating">
                        200
                        <IoStarSharp className="icon" /> item
                      </p>
                    </div>
                    <div className="item-edit">
                      <div className="edit">
                        <MdOutlineEdit className="icon" />
                      </div>
                      <div
                        className="decrement"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <AiOutlineMinusCircle className="icon" />
                      </div>
                      <div
                        className="increment"
                        onClick={() => incrementCart(item)}
                      >
                        <AiOutlinePlusCircle className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="complete-order">
        <button className="btn" onClick={localStorageClear}>
          Complete the order
        </button>
      </div>
    </div>
  );
};

export default CartData;
