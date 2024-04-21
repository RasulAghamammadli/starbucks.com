// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import RewardsHero from "./RewardsHero";
import RewardsStarted from "./RewardsStarted";
import RewardsExtras from "./RewardsExtras";
import RewardsCash from "./RewardsCash";
import RewardsQuestions from "./RewardsQuestions";

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
      <RewardsCash />
      <RewardsQuestions/>
    </>
  );
};

export default Rewards;
