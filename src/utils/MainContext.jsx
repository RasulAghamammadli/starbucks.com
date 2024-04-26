// MainContext.jsx
import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";

// Main Context Create
const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  // Global states
  const [categoryItems, setCategoryItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [giftItems, setGiftItems] = useState([]);

  // number states
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  // snackbar states
  const [openAlert, setOpenAlert] = useState(false);
  const [sizeAlert, setSizeAlert] = useState(false);
  const [finishAlert, setFinishAlert] = useState(false);

  // API requests
  // Category
  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => setCategoryItems(res.data))
      .catch((err) => console.log("Categorydə error var qaqaşım!!!", err));
  }, []);

  // Coffee
  useEffect(() => {
    axios
      .get("http://localhost:3000/coffee")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.log("Coffeedə error var qaqaşım!!!", err));
  }, []);

  // Gift Cards
  useEffect(() => {
    axios
      .get("http://localhost:3000/giftcard")
      .then((res) => setGiftItems(res.data))
      .catch((err) => console.log("Gift Cardsda error var qaqaşım!!!", err));
  }, []);

  // console.log(giftItems, "ozudu");

  // Add To Cart LocalStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // SnackBar Close
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  // Size Alert Close
  const handleCancel = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSizeAlert(false);
  };

  // Finish Alert Close
  const finishCancel = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFinishAlert(false);
  };

  // Add To Cart
  const addToCart = (item) => {
    if (!selectedSize) {
      setSizeAlert(true);
      return;
    }

    // Update cart
    const updatedCart = Array.from({ length: count }, (_, index) => ({
      ...item,
      id: `${item.id}-${index + 1}-${selectedSize.id}-${Date.now()}`,
      size: selectedSize,
    }));
    setCartItems((prevItems) => [...prevItems, ...updatedCart]);

    // Snack
    setOpenAlert(true);

    // reset count
    setCount(1);

    // reset size
    setSelectedSize(null);
  };

  // Remove From Cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Increment For Product
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement For Product
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // Cart Page Increment
  const incrementCart = (item) => {
    const updatedCart = {
      ...item,
      id: `${item.id}-${Date.now()}`,
    };
    setCartItems((prevItems) => [...prevItems, updatedCart]);
  };

  // Clear LocalStorage
  const localStorageClear = () => {
    setCartItems([]);
    localStorage.clear();
    setFinishAlert(true);
  };

  return (
    <MainContext.Provider
      value={{
        categoryItems,
        menuItems,
        cartItems,
        giftItems,
        count,
        setCount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        incrementCart,
        localStorageClear,
        setSelectedSize,
        openAlert,
        sizeAlert,
        setSizeAlert,
        handleCloseSnack,
        handleCancel,
        finishAlert,
        finishCancel,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

// PropTypes
MainContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MainContextProvider;
