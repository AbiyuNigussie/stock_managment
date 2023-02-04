import { TextField, Box } from "@mui/material";
import React from "react";

const BookSwitch = ({ onChange }) => {
  return (
    <>
      <Box>
        <TextField
          type="number"
          label="Weight"
          name="weight"
          helperText="Please Provide Products Weight in Grams(g)"
          onChange={onChange}
        />
      </Box>
    </>
  );
};

export default BookSwitch;
