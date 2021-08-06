import React, {createContext, useContext, useState} from 'react'

const CartContext = createContext();

export const useCartContext =()=> useContext(CartContext);

const CartContextProvider = ({children})=>{

    const [cart, setCart] = useState([])
    console.log(cart);
    return (
        <CartContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;

