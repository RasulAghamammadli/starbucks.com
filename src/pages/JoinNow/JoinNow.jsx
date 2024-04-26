// import React from 'react'
import { Helmet } from "react-helmet";

// components
import ProgressLinear from "../../components/Loading/ProgressLinear";
import JoinHeader from "../../components/Header/JoinHeader";
import NewFooter from "../../components/Footer/NewFooter";
import JoinBox from "./JoinBox";

const JoinNow = () => {
  return (
    <>
      <Helmet>
        <title>Create a Starbucks Account: Starbucks Coffee Company</title>
      </Helmet>
      <ProgressLinear />
      <JoinHeader />
      <JoinBox />
      <NewFooter />
    </>
  );
};

export default JoinNow;
