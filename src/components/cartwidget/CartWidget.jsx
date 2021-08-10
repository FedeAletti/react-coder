import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext/CartContext'
import './cartwidget.css'


export const CartWidget = () => {
    
    const [cartClick, setCartClick] = useState(false)

    //console.log(cartClick);

    return (
        <>
            <div className="cartWidget" onClick={(e)=>setCartClick(!cartClick)}>
                <i className="fas fa-shopping-cart cart-style"></i>
               
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
