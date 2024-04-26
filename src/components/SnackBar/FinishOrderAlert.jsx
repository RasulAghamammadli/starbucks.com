// import React from 'react'
import Snackbar from "@mui/material/Snackbar";
import { useMainContext } from "../../utils/MainContext";

const FinishOrderAlert = () => {
  const { finishAlert, finishCancel } = useMainContext();

  return (
    <div className="alert-finish">
      <Snackbar
        open={finishAlert}
        autoHideDuration={3000}
        onClose={finishCancel}
        message="Your order has been successfully completed."
      />
    </div>
  );
};

export default FinishOrderAlert;
