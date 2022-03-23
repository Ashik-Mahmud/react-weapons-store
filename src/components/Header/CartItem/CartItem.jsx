import React from "react";
const CartItem = () => {
  return (
    <li className="item">
      <div className="img">
        <img
          src="https://raw.githubusercontent.com/mir-hussain/guns/main/guns/glock.png"
          alt=""
        />
      </div>
      <div className="info">
        <span>goes name here</span>
        <div className="inner-info">
          <small>4354$</small>
          <small>95MM</small>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
