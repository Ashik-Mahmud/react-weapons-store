import React from "react";
import { BsCartPlus } from "react-icons/bs";
import "./Product.css";
const Product = ({ weapon }) => {
  const { img, name } = weapon;
  return (
    <div className="product">
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div className="inner-details">
          <ul>
            <li>
              <span>Action</span>
              <span>Semi-Automatic</span>
            </li>
            <li>
              <span>Bullet</span>
              <span>9MM</span>
            </li>
            <li>
              <span>Capacity</span>
              <span>14 house</span>
            </li>
            <li>
              <span>Category</span>
              <span>Pistol</span>
            </li>
          </ul>
        </div>
        <div className="cart-btns">
          <span className="colorize">1454$</span>
          <button>
            <BsCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
