// import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";

// context
import { useMainContext } from "../../utils/MainContext";

const SnackBar = ({ productName }) => {
  const { openAlert, handleCloseSnack } = useMainContext();

  return (
    <section className="snackbar">
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {productName} added.
        </Alert>
      </Snackbar>
    </section>
  );
};

// PropTypes
SnackBar.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default SnackBar;
