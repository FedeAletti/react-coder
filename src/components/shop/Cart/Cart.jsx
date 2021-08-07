import CartItem from './CartItem/CartItem'
import { useCartContext } from "../../context/CartContext/CartContext"

export const Cart = () => {

    const {cart, deleteCart} = useCartContext()
    // console.log(cart);
    return (
       
        <>
            <h1>Cart!!</h1>
            {/* {console.log(cart)} */}
            
            {cart.length !== 0 &&(
                <>
                    <button onClick={deleteCart}>Limpiar Carrito</button>
                    {cart.map(product =>(
                        <CartItem key={product.id} product={product}/>
                    ))}
                </>
            )}
            {cart.length === 0 && <p>No hay productos en el carrito :( </p>}

        </>
    )
}

