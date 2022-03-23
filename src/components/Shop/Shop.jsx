import React from "react";
import Product from "./Product/Product";
import Search from "./Search/Search";
import "./Shop.css";
const Shop = () => {
  return (
    <>
      <section id="shop">
        <div className="container">
          <Search />
          <div className="shop-container">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
