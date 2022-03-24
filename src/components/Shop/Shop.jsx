import React from "react";
import Product from "./Product/Product";
import Search from "./Search/Search";
import "./Shop.css";
const Shop = ({ weapons, setCartCount, setStorageCartItem }) => {
  return (
    <>
      <section id="shop">
        <div className="container">
          <Search />
          <div className="shop-container">
            {weapons.map((weapon) => (
              <Product
                key={weapon.id}
                weapon={weapon}
                setCartCount={setCartCount}
                setStorageCartItem={setStorageCartItem}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
