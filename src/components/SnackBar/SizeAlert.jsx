// import React from 'react'
import Snackbar from "@mui/material/Snackbar";
import { useMainContext } from "../../utils/MainContext";

const SizeAlert = () => {
  const { sizeAlert, handleCancel } = useMainContext();

  return (
    <div className="alert-size">
      <Snackbar
        open={sizeAlert}
        autoHideDuration={2000}
        onClose={handleCancel}
        message="Please select a size."
      />
    </div>
  );
};

export default SizeAlert;
