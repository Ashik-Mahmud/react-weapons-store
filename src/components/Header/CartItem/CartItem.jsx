import React from "react";
const CartItem = ({ cart, storageCartItem }) => {
  const { img, name, bullet, price } = cart;

  return (
    <li className="item">
      <div className="img">
        <img src={img} alt={"name"} />
      </div>
      <div className="info">
        <span>{name}</span>
        <div className="inner-info">
          <small>{price}$</small>

          <small>{bullet}</small>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
