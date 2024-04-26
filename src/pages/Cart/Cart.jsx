// import React from 'react'
import { Helmet } from "react-helmet";

// Cart Components
import ProgressLinear from "../../components/Loading/ProgressLinear";
import CartContent from "./CartContent";
import CartSubHeader from "./CartSubHeader";

// Snackbar
import FinishOrderAlert from "../../components/SnackBar/FinishOrderAlert";

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Review Order: Starbucks Coffee Company</title>
      </Helmet>
      <ProgressLinear />
      <CartSubHeader />
      <CartContent />
      <FinishOrderAlert />
    </>
  );
};

export default Cart;
