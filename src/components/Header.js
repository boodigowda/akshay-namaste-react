import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [logBtn, setLogBtn] = useState("LogIn");
  console.log("Header Component...!")
  const onLogBtnClick = () => {
    logBtn === "LogIn" ? setLogBtn("LogOut") : setLogBtn("LogIn") 
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="log-btn" onClick={onLogBtnClick}>{logBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
