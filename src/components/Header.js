import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="l-head">
            <ShoppingCartIcon fontSize="large" style={{ color: "white" }} />
            <p className="Logo-des">Product Add</p>
          </div>
          <div className="right-head">
            <button className="cancel-btn">cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
