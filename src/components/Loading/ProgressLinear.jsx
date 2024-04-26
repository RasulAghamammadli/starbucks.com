// import React from 'react'
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";

const ProgressLinear = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 3000);

  return (
    <>
      {load && (
        <div className="linear-progress">
          <Stack sx={{ width: "100%" }}>
            <LinearProgress />
          </Stack>
        </div>
      )}
    </>
  );
};

export default ProgressLinear;
