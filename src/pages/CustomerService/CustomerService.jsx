// import React from 'react'
import { useState } from "react";
import CustomerLoading from "../../components/Loading/CustomerLoading";
import { Helmet } from "react-helmet";

// Customer components
import CustomerHeader from "./CustomerHeader";
import CustomerSearch from "./CustomerSearch";
import CustomerCards from "./CustomerCards";
import CustomerContact from "./CustomerContact";
import CustomerFooter from "./CustomerFooter";

const CustomerService = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      <Helmet>
        <title>Starbucks Help - Starbucks Portal</title>
      </Helmet>
      {isLoading ? (
        <CustomerLoading />
      ) : (
        <>
          <CustomerHeader />
          <CustomerSearch />
          <CustomerCards />
          <CustomerContact />
          <CustomerFooter />
        </>
      )}
    </>
  );
};

export default CustomerService;
