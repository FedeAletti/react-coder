import {useState} from 'react' 
import {Link} from 'react-router-dom'
import './itemcount.css'
import { useCartContext } from "../shop/Cart/CartContext/CartContext"


export const ItemCount = ({initial, item, onAdd, count}) => {

    const [cantidad, setCantidad] = useState(initial)
    
    const {setCart} = useCartContext()

    const handleAdd=()=>{
            if (cantidad<item.stock) {
                setCantidad(cantidad+1)
            }
        }
    const handleRemove=()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1)
        }
    }
    
    function addToCart(id) {
        // const findProductInDB = item.find(prod => prod.id === id)
        // console.log('DESDE ITEM: ', findProductInDB)
        console.log(item);
        //setCart(...cart)
    }
      
    return (
        <>
            <div className="d-flex flex-column ">
                <div className="btns-count">
                    <button className="btn btn-block" onClick={handleRemove}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <label className="alert alert-white cantidad-items">
                        {cantidad}
                    </label>
                    <button className="btn btn-block" onClick={handleAdd}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                
                <div className="agreg-carrito">
                    {/* <ButtonShop onAdd={onAdd} count={count} cantidad={cantidad}/> */}

                    <button className="btn bg-principal text-white btn-block btn-carrito "
                       onClick={()=>onAdd(cantidad)}>
                        {count === 0 ? 
                            'Agregar al Carrito'
                            : <Link to={'/cart'} className="text-white">Terminar Compra</Link>
                        }
                    </button>
                </div>
            </div>
            
        </>
    )
}
