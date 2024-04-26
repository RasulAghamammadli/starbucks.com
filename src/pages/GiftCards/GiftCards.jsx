// import React from 'react'
import { Helmet } from "react-helmet";

// Gift Card Components
import Featured from "./Featured";
import Purchase from "./Purchase";
import Easter from "./Easter";
import Sibling from "./Sibling";
import PetDay from "./PetDay";
import Spring from "./Spring";
import Appreciation from "./Appreciation";
import Admin from "./Admin";
import GiftSupport from "./GiftSupport";

// Components
import NewFooter from "../../components/Footer/NewFooter";
import ProgressLinear from "../../components/Loading/ProgressLinear";

const GiftCards = () => {
  return (
    <>
      <Helmet>
        <title>Starbucks Gift Cards: Starbuck Coffee Company</title>
      </Helmet>
      <ProgressLinear />
      <Featured />
      <Purchase />
      <Easter />
      <Sibling />
      <PetDay />
      <Spring />
      <Appreciation />
      <Admin />
      <GiftSupport />
      <NewFooter />
    </>
  );
};

export default GiftCards;
