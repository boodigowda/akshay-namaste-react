import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Cart = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>
      <h1>Cart</h1>
      <h3>This is Cart Page....!</h3>
      <h2>{loggedInUser}</h2>
    </div>
  );
};

export default Cart;
