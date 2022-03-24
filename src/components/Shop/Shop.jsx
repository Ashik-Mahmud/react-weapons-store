import React, { useState } from "react";
import Product from "./Product/Product";
import Search from "./Search/Search";
import "./Shop.css";
const Shop = ({
  weapons,
  searchWeapons,
  setCartCount,
  setStorageCartItem,
  setWeapons,
  setSearchWeapons,
}) => {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(false);

  const handleSearch = () => {
    if (!search) {
      return alert("Fill out the field");
    }
    const searchedWeapons = weapons.filter((weapon) =>
      weapon.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchWeapons(searchedWeapons);
  };

  setTimeout(() => setMessage(false), 5000);

  return (
    <>
      <section id="shop">
        <div className="container">
          <Search
            setSearch={setSearch}
            search={search}
            handleSearch={handleSearch}
          />
          {searchWeapons.length > 0 ? (
            <div className="shop-container">
              {searchWeapons.map((weapon) => (
                <Product
                  key={weapon.id}
                  weapon={weapon}
                  setCartCount={setCartCount}
                  setStorageCartItem={setStorageCartItem}
                  setMessage={setMessage}
                />
              ))}
            </div>
          ) : (
            <div className="not-found-message">
              <img
                src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
                alt=""
              />
            </div>
          )}
        </div>
      </section>
      <div className={`success-message ${message ? "active" : ""}`}>
        Product Added Successfully
      </div>
    </>
  );
};

export default Shop;
