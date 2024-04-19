// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import RewardsHero from "./RewardsHero";
import RewardsStarted from "./RewardsStarted";
import RewardsExtras from "./RewardsExtras";

const Rewards = () => {
  return (
    <>
      <Helmet>
        <title>
          Starbucks® Rewards - Order Ahead, Endless Extras, Free Coffee:
          Starbucks Coffee Company
        </title>
      </Helmet>
      <RewardsHero />
      <RewardsStarted />
      <RewardsExtras />
    </>
  );
};

export default Rewards;
