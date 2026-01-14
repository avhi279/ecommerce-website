import { useState, useContext, createContext,useEffect } from "react";
import '../styles/CartStyles.css';


const CartContext = createContext();

const CartProvider = ({ children }) => {
  // ✅ cart should be an array, not an object
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    let existingCartItem=localStorage.getItem('cart')
    if(existingCartItem) setCart(JSON.parse(existingCartItem))
  },[])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
