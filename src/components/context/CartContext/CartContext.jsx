import React, {createContext, useContext, useState} from 'react'

const CartContext = createContext();

export const useCartContext =()=> useContext(CartContext);

const CartContextProvider = ({children})=>{

    const [cart, setCart] = useState([])
    console.log(cart);

    const isInCart = id => cart.find(prod=> prod.id === id)

    const addToCart = product=>{
        //Copia del state para no alterar el original
        const newCart = [...cart]
        //Verificación 
        const productIsInCart = isInCart(product.id)
        //console.log(productIsInCart);
    
        //Si el producto está en el carrito...
        if(productIsInCart){
            //buscamos en el array de carrito el elemento y sumamos la cantidad
            newCart[newCart.findIndex(
                prod=> prod.id === productIsInCart.id)].quantity++;

            //Actualizamos carrito
            setCart(newCart);
            //console.log(cart);
            return
        }
        
        //Si no está:
        product.quantity = 1

        setCart([
            ...newCart,
            product
        ]);
        
        //console.log(cart);
    }

    const deleteFromCart = product =>{
        //Cremos una copia del state para no alterar original
        const newCart = [...cart]
    
        //Verificación 
        const productIsInCart = isInCart(product.id)
        //console.log(productIsInCart);
        
        if(!productIsInCart){
            //console.log('El producto no está acá');
            return;
        }

        const deleteProduct = newCart.filter(
            prod=>prod.id !== productIsInCart.id)
        
        setCart(deleteProduct)
        //console.log(cart);
    
    }

    const deleteCart=()=>setCart([])

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            deleteFromCart,
            deleteCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;

