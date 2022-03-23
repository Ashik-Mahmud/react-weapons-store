import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaShoppingBasket, FaUserCheck } from "react-icons/fa";
import CartItem from "./CartItem/CartItem";
import "./Header.css";
const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div id="header">
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">
                <AiOutlineHome />
              </a>
            </li>
            <li>
              <a href="/">
                <FaShoppingBasket />
              </a>
            </li>
            <li>
              <a href="/">
                <FaUserCheck />
              </a>
            </li>
            <li>
              <a
                href="#cart"
                className="cart active"
                onClick={() => setShowCart((prev) => !prev)}
              >
                <BsCartCheck />
                <sup className="badge">0</sup>
              </a>
              <ul className={`carts-item ${showCart ? "active" : " "}`}>
                <div className="carts-header">
                  <h4>Cart Items</h4>
                  <span
                    className="close-btn"
                    onClick={() => setShowCart(false)}
                  >
                    &times;
                  </span>
                </div>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
