import React, { useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { storageItem } from "../../Storage/Storage";
import { handleStorage } from "./HandleStorage";
import "./Product.css";
const Product = ({ weapon, setCartCount, setStorageCartItem }) => {
  const { img, name, bullet, capacity, action, category, price, id } = weapon;

  const handleCart = (id) => {
    handleStorage(id);
    setCartCount(storageItem().length);
    setStorageCartItem(storageItem());
  };

  useEffect(() => {
    setCartCount(storageItem().length);
    setStorageCartItem(storageItem());
  }, [setCartCount, setStorageCartItem]);

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
              <span>{action}</span>
            </li>
            <li>
              <span>Bullet</span>
              <span>{bullet}</span>
            </li>
            <li>
              <span>Capacity</span>
              <span>{capacity}</span>
            </li>
            <li>
              <span>Category</span>
              <span>{category}</span>
            </li>
          </ul>
        </div>
        <div className="cart-btns">
          <span className="colorize">{price}$</span>
          <button
            className={storageItem()
              .map((item) => (item.id === id ? "disabled" : " "))
              .join("")}
            onClick={() => handleCart(id)}
          >
            <BsCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
