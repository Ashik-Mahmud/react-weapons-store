import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Shop from '../Shop/Shop'
const Home = () => {

    const [weapons, setWeapons] = useState([])

    useEffect(()=>{
        fetch('./data.json')
        .then(response => response.json())
        .then(data => setWeapons(data))
    }, [])



  return (
    <>
        <Header />
        <Shop weapons={weapons} />
    </>
  )
}

export default Home