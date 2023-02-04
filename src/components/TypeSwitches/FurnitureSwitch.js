import { TextField, Box, FormHelperText } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

const FurnitureSwitch = ({ onChange }) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <TextField
          label="Height(CM)"
          type="number"
          name="height"
          margin="dense"
          onChange={onChange}
        />
        <TextField
          label="Length(CM)"
          type="number"
          name="length"
          margin="dense"
          onChange={onChange}
        />
        <TextField
          label="Width(CM)"
          type="number"
          name="width"
          margin="dense"
          onChange={onChange}
        />
      </Box>
      <FormHelperText children={"Please provide details in  centimeter(CM)"} />
    </>
  );
};

export default FurnitureSwitch;
