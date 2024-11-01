"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from "./Mainmenu.module.css"
import AddToCart from '../addCart/AddToCart'
import AddQuantity from '../AddQuantity/AddQuantity'
import { cartState } from '@/app/state'
import { useRecoilState } from 'recoil'

const Mainmenu = () => {

    const deseretMenu = [
    {
        id: 1,
        image: "./images/waffle.jpg",
        desertSortName: "Waffle",
        desertFullName: "Waffle with Berries",
        price: 6.50
    },
    {
        id: 2,
        image: "./images/creme.jpg",
        desertSortName: "Cremme brulee",
        desertFullName: "Vanilla Bean Cremme Brule",
        price: 7.00
    },
    {
        id: 3,
        image: "./images/macaron.jpg",
        desertSortName: "Macaron",
        desertFullName: "Macaron Fix of Five",
        price: 8.00
    },
    {
        id: 4,
        image: "./images/tiramisu.jpg",
        desertSortName: "Tiramisu",
        desertFullName: "Classic Tiramisu",
        price: 5.50
    },
    {
        id: 5,
        image: "./images/baklava.jpg",
        desertSortName: "Baklava",
        desertFullName: "Pistachio Baklava",
        price: 4.00
    },
    {
        id: 6,
        image: "./images/meringue.jpg",
        desertSortName: "Pie",
        desertFullName: "Lemon Meringue Pie",
        price: 5.00
    },
    {
        id: 7,
        image: "./images/cake.jpg",
        desertSortName: "cake",
        desertFullName: "Red Velvet Cake",
        price: 4.50
    },
    {
        id: 8,
        image: "./images/brownie.jpg",
        desertSortName: "Brownie",
        desertFullName: "Salted Caramel Brownie",
        price: 5.50
    },
    {
        id: 9,
        image: "./images/panacota.jpg",
        desertSortName: "Panna Cotta",
        desertFullName: "Vanilla Panna Cotta",
        price: 6.50
    },
    ]

    const [cartItems, setCartItems] = useState({});

    // Update the cart items state when an item is added
    const handleAddToCart = (id) => {
        setCartItems((prevCartItems) => ({
            ...prevCartItems,
            [id]: !prevCartItems[id], // Toggle the cart state for the selected item
        }));
        handleToCart(id);
    };

    const [cart, setCart] = useRecoilState(cartState)

  const handleToCart = (id) => {
    const productToAdd = deseretMenu.find((product) => product.id === id)
    const existingProduct = cart.find((item) => item.id === id)

    if(existingProduct) {
      const updateCart = cart.map((item) => 
        item.id === id ?
        {...item, quantity: item.quantity +1}
        : item
      )
      setCart(updateCart)
    } else {
      setCart([...cart, {...productToAdd, quantity: 1}])
    }
  }


  return (
    <div className={styles.mainMenuContainer}>
        <h1 style={{fontSize: "50px", fontWeight: "1000"}}>Dessrets</h1>
      <div className={styles.menuItemContainer}>
         {
           deseretMenu.map((menu) => <div className={styles.item} key={menu.id}>
             <div className={styles.imgContainer}>
                <img 
                     width={270}
                     height={270}
                     src={menu.image} 
                     alt='/' 
                />
             </div>
             <div className={styles.sortName}>
                {menu.desertSortName}
             </div>
             <div className={styles.fullName}>
                {menu.desertFullName}
             </div>
             <div className={styles.price}>
                {menu.price}$
             </div>
             {cartItems[menu.id]? (
              <AddQuantity id={menu.id} handleAddToCart={() => handleAddToCart(menu.id)} />
            ) : (
              <><AddToCart deseretMenu={deseretMenu} handleAddToCart={() => handleAddToCart(menu.id)} /></>
            )}
           </div>)
         }
      </div>
    </div>
  )
}

export default Mainmenu
