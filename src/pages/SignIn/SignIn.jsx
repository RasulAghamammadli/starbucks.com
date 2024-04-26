// import React from 'react'
import { Helmet } from "react-helmet";

// components
import ProgressLinear from "../../components/Loading/ProgressLinear";
import JoinHeader from "../../components/Header/JoinHeader";
import NewFooter from "../../components/Footer/NewFooter";
import SignBox from "./SignBox";

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Account sign in: Starbucks Coffee Company</title>
      </Helmet>
      <ProgressLinear />
      <JoinHeader />
      <SignBox />
      <NewFooter />
    </>
  );
};

export default SignIn;
