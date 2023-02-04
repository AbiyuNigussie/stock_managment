import { TextField, Box } from "@mui/material";
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
    </>
  );
};

export default FurnitureSwitch;
