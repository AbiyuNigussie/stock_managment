import React from "react";
import { Box, Input, TextField } from "@mui/material";
const DvdSwitch = ({ onChange }) => {
  return (
    <>
      <Box>
        <TextField
          type="number"
          label="size"
          name="size"
          helperText="Please Provide Products Suze in MegaByte(MB)"
          onChange={onChange}
        />
      </Box>
    </>
  );
};

export default DvdSwitch;
