import React from 'react'
import { useCartContext } from '../CartContext/CartContext';

export default function CartItem({product}) {
    //const { deleteFromCart } = useCartContext();
  
    return (
      <div>
        <h4>{product.nombre}</h4>
        <p>{product.quantity ? product.quantity : 0}</p>
        <button
        //   onClick={() => deleteFromCart(product)}
        >X</button>
      </div>
    );
}
  