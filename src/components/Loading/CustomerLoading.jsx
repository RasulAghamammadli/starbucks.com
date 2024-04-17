// import React from 'react'
import { CircularProgress } from "@mui/joy";

const CustomerLoading = () => {
  return (
    <div className="customer-load">
      <div className="load-nav">
        <CircularProgress color="neutral" size="sm" />
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default CustomerLoading;
