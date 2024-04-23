// import React from 'react'
import { Helmet } from "react-helmet";

// Menu Components
import MenuNav from "./MenuNav";
import MenuMain from "./MenuMain";

// Footer
import NewFooter from "../../components/Footer/NewFooter";

// Cart Component
import FixedCart from "../Cart/FixedCart";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu: Starbucks Coffee Company</title>
      </Helmet>
      <MenuNav />
      <MenuMain />
      <NewFooter />
      <FixedCart />
    </>
  );
};

export default Menu;
