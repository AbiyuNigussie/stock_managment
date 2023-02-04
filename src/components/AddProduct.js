import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// Material UI components

import {
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SaveIcon from "@mui/icons-material/Save";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

// Imported Components

import DvdSwitch from "./TypeSwitches/DvdSwitch";
import BookSwitch from "./TypeSwitches/BookSwitch";
import FurnitureSwitch from "./TypeSwitches/FurnitureSwitch";

// Add Product Component

const AddProduct = () => {
  // UseState Variables

  const [inputs, setInputs] = useState({});
  const [dvdswitch, setDvdSwitch] = useState(false);
  const [bookswitch, setBookSwitch] = useState(false);
  const [furnitureswitch, setFurnitureSwitch] = useState(false);

  // HandleValidation Function

  const handleValidation = () => {};

  // HandleChange Function

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // HandleSubmit Function

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  // UseEffect Hook

  useEffect(() => {
    inputs.typeSwitcher === "DVD" ? setDvdSwitch(true) : setDvdSwitch(false);
    inputs.typeSwitcher === "BOOK" ? setBookSwitch(true) : setBookSwitch(false);
    inputs.typeSwitcher === "FURNITURE"
      ? setFurnitureSwitch(true)
      : setFurnitureSwitch(false);
  }, [inputs]);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            autoComplete="off"
          >
            <TextField
              fullWidth
              required
              id="outlined"
              name="sku"
              label="SKU"
              value={inputs.sku || ""}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Name"
              value={inputs.name || ""}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="price"
              name="price"
              label="Price"
              type="number"
              value={inputs.price || ""}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl sx={{ width: 150 }} margin="normal">
              <InputLabel id="type-switcher-label">Type Switcher</InputLabel>
              <Select
                label="TypeSwitcher"
                labelId="type-switcher-label"
                name="typeSwitcher"
                id="type-switcher-select"
                value={inputs.typeSwitcher || ""}
                onChange={handleChange}
              >
                <MenuItem value={"DVD"}>DVD</MenuItem>
                <MenuItem value={"BOOK"}>Book</MenuItem>
                <MenuItem value={"FURNITURE"}>Furniture</MenuItem>
              </Select>
            </FormControl>
            <Box
              sx={{
                margin: "0 0 40px 0",
                height: "100px",
              }}
            >
              {dvdswitch && <DvdSwitch onChange={handleChange} />}
              {bookswitch && <BookSwitch onChange={handleChange} />}
              {furnitureswitch && <FurnitureSwitch onChange={handleChange} />}
            </Box>
            <Button type="submit" variant="contained" endIcon={<SaveIcon />}>
              SAVE
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
