import React from 'react'
import {Link} from 'react-router-dom'


// function finCompra(count){
//     console.log(count);
//     return ( 'Terminar Compra')
// }

export const ButtonShop = ({onAdd, count, cantidad}) => {

    return (
        <>
            <button className="btn bg-principal text-white btn-block btn-carrito "
                onClick={()=>onAdd(cantidad)}>
                    {/* Agregar al Carrito */}
                    {count === 0 ? 
                        'Agregar al Carrito'
                        // : finCompra(count)
                        : <Link to={'/cart'} className="text-white">Terminar Compra</Link>
                    }
            </button>
        </>
    )
}
