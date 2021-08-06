import CartItem from './CartItem/CartItem'
import { useCartContext } from "./CartContext/CartContext"

export const Cart = () => {
    return (
        // <div className="text-center">
        //     < img className="" src="https://i.ibb.co/0ZRb00K/9f872b94485eb41def36433feb39591edab60dd0-hq-1.jpg" alt="9f872b94485eb41def36433feb39591edab60dd0-hq-1" height="800px"/>
        // </div>
        <>
        <h1>Cart!!</h1>
            {/* <div className=" d-flex justify-content-center align-items-center shadow">
                <div className="card w-100 ">
                    <div className="d-flex justify-content-between align-items-center container w-75 ">
                      
                    </div>
                </div>
            </div> */}
        </>
    )
}


// {cart.length !== 0 && (
//     <>
//         <button onClick={deleteCart}>Limpiar carrito</button>
//         {cart.map(product => (
//         <CartItem key={product.id} product={product} />
//         ))}
//     </>
//     )}
//     {cart.length === 0 && <p>No hay productos en el carrito :( </p>}
