// import React from 'react'
import { Helmet } from "react-helmet";

// Menu Components
import MenuNav from "./MenuNav";
import MenuMain from "./MenuMain";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu: Starbucks Coffee Company</title>
      </Helmet>
      <MenuNav />
      <MenuMain />
    </>
  );
};

export default Menu;
