import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext/CartContext'
import './cartwidget.css'


export const CartWidget = () => {
    
    const [cartClick, setCartClick] = useState(false)

    const {cart} = useCartContext();
    let itemsCartWidg = 0
    //const total = cart.forEach(prod => (prod.price))
    for (let i = 0; i < cart.length; i++) {
        const cant = cart[i].quantity;
        
        console.log(cant); 
        itemsCartWidg = itemsCartWidg + cant
    }
    console.log(itemsCartWidg);
    //console.log(cartClick);

    return (
        <>
            <div className="cartWidget" onClick={(e)=>setCartClick(!cartClick)}>
                <span className="cartCant">{itemsCartWidg}</span>
                <i className="fas fa-shopping-cart cart-style"><p></p></i>
               
                {/*cartClick ?
                    cart.length === 0 ?
                        <div className="card card-click ">
                            <p>No hay artículos en el carrito</p>
                        </div>
                        :
                        <div className="card card-click">
                            <Link to="/cart" className="btn bg-principal">Ver Carrito</Link>
                        </div>
                    :
                    <></>
                    
                */}
                    {cartClick ?
                        <div className="card-click">
                            <Link to="/cart" className="btn bg-principal text-white">Ver Carrito</Link>
                        </div>
                        :
                        <></>
                    }
            </div>
        </>
    )
}
