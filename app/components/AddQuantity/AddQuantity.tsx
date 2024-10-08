import React from 'react'
import styles from "./AddQuantity.module.css"
import { addToCartState, cartState, quantityState } from '@/app/state'
import { useRecoilState } from 'recoil'

const AddQuantity = ({handleAddToCart, id}) => {

  const [cart, setCart] = useRecoilState(cartState);

  
  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
        prevCart.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + increment) } // Prevent quantity from going below 1
                : item
        )
    );
};

const currentItem = cart.find((item) => item.id === id);
  return (
    <div className={styles.container}>
     <button onClick={() => updateQuantity(id, -1)}>
     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
     </button>
     <span onClick={handleAddToCart}>
        {currentItem?.quantity || 1}
     </span>
     <button onClick={() => updateQuantity(id, 1)}>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
     </button>
    </div>
  )
}

export default AddQuantity
