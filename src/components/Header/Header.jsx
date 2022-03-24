import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaShoppingBasket, FaUserCheck } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartItem from "./CartItem/CartItem";
import "./Header.css";
const Header = ({ cartCount, weapons, storageCartItem, handleClear }) => {
  const [showCart, setShowCart] = useState(false);
  const cartItemsId = storageCartItem?.map((cart) => cart.id);
  const filterItems = weapons.filter((weapon) =>
    cartItemsId.includes(weapon.id)
  );

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
                <sup className="badge">{cartCount}</sup>
              </a>
              <ul className={`carts-item ${showCart ? "active" : " "}`}>
                {storageCartItem.length > 0 ? (
                  <>
                    {" "}
                    <div className="carts-header">
                      <h4>Cart Items</h4>
                      <small className="clear-cart" onClick={handleClear}>
                        Clear Cart
                      </small>
                      <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                      >
                        &times;
                      </span>
                    </div>
                    {filterItems.map((cart) => (
                      <CartItem
                        key={cart.id}
                        cart={cart}
                        storageCartItem={storageCartItem}
                      />
                    ))}
                  </>
                ) : (
                  <div className="error-message">
                    <h1>
                      <MdOutlineRemoveShoppingCart />
                    </h1>
                    <span>No Carts Found.</span>
                  </div>
                )}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
