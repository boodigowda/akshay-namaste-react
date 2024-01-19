import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [logBtn, setLogBtn] = useState("LogIn");
  const data = useContext(UserContext)
  console.log(data);
  const onLogBtnClick = () => {
    logBtn === "LogIn" ? setLogBtn("LogOut") : setLogBtn("LogIn") 
  }
  return (
<div className="header flex items-center justify-between bg-red-50">
      <div className="logo-container">
        <img className="logo w-36" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-4">
          <li><Link to='/' className="hover:text-gray-300 px-4">Home</Link></li>
          <li><Link to='/about' className="hover:text-gray-300 px-4">About Us</Link></li>
          <li><Link to='/contact' className="hover:text-gray-300 px-4">Contact Us</Link></li>
          <li><Link to='/cart' className="hover:text-gray-300 px-4">Cart</Link></li>
          <li><Link to='/grocery' className="hover:text-gray-300 px-4">Grocery</Link></li>
          <button className="log-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mx-2 rounded" onClick={onLogBtnClick}>
            {logBtn}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
