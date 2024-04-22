// MainContext.jsx
import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => setCategoryItems(res.data))
      .catch((err) => console.log("Categorydə error var qaqaşım!!!", err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/coffee")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.log("Coffeedə error var qaqaşım!!!", err));
  }, []);


  //   const addToCart = (item) => {
  //     setCartItems((prevItems) => [...prevItems, item]);
  //   };

  //   const removeFromCart = (itemId) => {
  //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  //   };

  //   const increaseQuantity = (itemId) => {
  //     setCartItems((prevItems) =>
  //       prevItems.map((item) =>
  //         item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
  //       )
  //     );
  //   };

  //   const decreaseQuantity = (itemId) => {
  //     setCartItems((prevItems) =>
  //       prevItems.map((item) =>
  //         item.id === itemId && item.quantity > 1
  //          // ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       )
  //     );
  //   };

  return (
    <MainContext.Provider
      value={{
        categoryItems,
        menuItems,
        cartItems,
        // addToCart,
        // removeFromCart,
        // increaseQuantity,
        // decreaseQuantity,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
