import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [logBtn, setLogBtn] = useState("LogIn");
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
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <button className="log-btn" onClick={onLogBtnClick}>{logBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
