// import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Drinks from "./pages/Menu/Drinks";
import ProductInner from "./pages/ProductInner/ProductInner";
import Cart from "./pages/Cart/Cart";
import Rewards from "./pages/Rewards/Rewards";
import GiftCards from "./pages/GiftCards/GiftCards";
import GiftCardIn from "./pages/GiftCards/GiftCardIn";
import FeaturedInner from "./pages/GiftCards/FeaturedInner";
import FindStore from "./pages/FindStore/FindStore";
import SignIn from "./pages/SignIn/SignIn";
import JoinNow from "./pages/JoinNow/JoinNow";
import OurCompany from "./pages/OurCompany/OurCompany";
import OurCoffee from "./pages/OurCoffee/OurCoffee";
import CustomerService from "./pages/CustomerService/CustomerService";
import People from "./pages/People/People";
import Planet from "./pages/Planet/Planet";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

// Main Context
import MainContextProvider from "./utils/MainContext";

const App = () => {
  // Path Location
  const location = useLocation();

  // Components' States
  const [showFooter, setShowFooter] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  // excluded
  const excludedFooter = [
    "/menu",
    "/cart",
    "/gift",
    "/find-store",
    "/login",
    "/register",
    "/customer-service",
  ];
  const excludedHeader = ["/cart", "/login", "/register", "/customer-service"];

  useEffect(() => {
    setShowFooter(!excludedFooter.includes(location.pathname));
    setShowHeader(!excludedHeader.includes(location.pathname));
  }, [location.pathname]);

  return (
    <MainContextProvider>
      {showHeader && <Header />}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/menu/drinks/:id" element={<Drinks />} />
          <Route exact path="/menu/product/:id" element={<ProductInner />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/rewards" element={<Rewards />} />
          <Route exact path="/gift" element={<GiftCards />} />
          <Route exact path="/gift/:category/:id" element={<GiftCardIn />} />
          <Route
            exact
            path="/gift/category/featured"
            element={<FeaturedInner />}
          />
          <Route exact path="/find-store" element={<FindStore />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/register" element={<JoinNow />} />
          <Route exact path="/about-us" element={<OurCompany />} />
          <Route exact path="/our-coffee" element={<OurCoffee />} />
          <Route exact path="/customer-service" element={<CustomerService />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/planet" element={<Planet />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </MainContextProvider>
  );
};

export default App;
