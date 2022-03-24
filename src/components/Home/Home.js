import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Shop from '../Shop/Shop'
const Home = () => {

    const [weapons, setWeapons] = useState([])
    const [searchWeapons, setSearchWeapons] =  useState([])
    const [cartCount, setCartCount] = useState(0)
    const [storageCartItem, setStorageCartItem] = useState([])
    const handleClear = () => {
        if(window.confirm("Do you want clear carts?")){
            setStorageCartItem([])
            setCartCount(0)
            localStorage.removeItem("carts")
        }
    };
    useEffect(()=>{
        fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            setWeapons(data)
            setSearchWeapons(data)
        })
    }, [])



  return (
    <>
        <Header cartCount={cartCount} storageCartItem={storageCartItem} handleClear={handleClear} weapons={weapons} />
        <Shop weapons={weapons} searchWeapons={searchWeapons} setWeapons={setWeapons} setStorageCartItem={setStorageCartItem} setCartCount={setCartCount} setSearchWeapons={setSearchWeapons} />
    </>
  )
}

export default Home