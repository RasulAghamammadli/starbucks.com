// import React from 'react'
import { useState } from "react";
import CustomerLoading from "../../components/Loading/CustomerLoading";
import { Helmet } from "react-helmet";

// Customer components
import CustomerSearch from "./CustomerSearch";
import CustomerCards from "./CustomerCards";
import CustomerContact from "./CustomerContact";

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
          <CustomerSearch />
          <CustomerCards />
          <CustomerContact />
        </>
      )}
    </>
  );
};

export default CustomerService;
