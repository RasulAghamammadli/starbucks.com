// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import RewardsHero from "./RewardsHero";
import RewardsFavorites from "./RewardsFavorites";
import RewardsStarted from "./RewardsStarted";
import RewardsExtras from "./RewardsExtras";
import RewardsCash from "./RewardsCash";
import RewardsPartners from "./RewardsPartners";
import RewardsQuestions from "./RewardsQuestions";
import ProgressLinear from "../../components/Loading/ProgressLinear";

const Rewards = () => {
  return (
    <>
      <Helmet>
        <title>
          Starbucks® Rewards - Order Ahead, Endless Extras, Free Coffee:
          Starbucks Coffee Company
        </title>
      </Helmet>
      <ProgressLinear />
      <RewardsHero />
      <RewardsStarted />
      <RewardsFavorites />
      <RewardsExtras />
      <RewardsCash />
      <RewardsPartners />
      <RewardsQuestions />
    </>
  );
};

export default Rewards;
