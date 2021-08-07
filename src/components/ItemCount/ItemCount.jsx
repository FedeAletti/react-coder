import {useState} from 'react' 
import {Link} from 'react-router-dom'
import './itemcount.css'
import { useCartContext } from "../context/CartContext/CartContext"
import { useAppContext } from '../context/AppContext/AppContext'


export const ItemCount = ({initial, product, onAdd, count}) => {

    const [cantidad, setCantidad] = useState(initial)
    
    const handleAdd=()=>{
        if (cantidad<product.stock) {
            setCantidad(cantidad+1)
        }
    }
    const handleRemove=()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1)
        }
    }

    //Context 
    const { addToCart } = useCartContext();
    const { products } = useAppContext();
    
    function handleClick(id, quant) {
        const findProductInDB = products.find(prod => prod.id === id);
        //console.log('DESDE ITEM: ', findProductInDB);
    
        if (!findProductInDB) {
          console.log('NO SE PUDO AGREGAR AL CARRITO!!');
          return;
        }
    
        addToCart(findProductInDB);
    }

    // const handleClick = id => {
    //     const findProductInDB = products.find(prod => prod.id === id);
    //     console.log('DESDE ITEM: ', findProductInDB);
    
    //     if (!findProductInDB) {
    //       console.log('NO SE PUDO AGREGAR AL CARRITO!!');
    //       return;
    //     }
    
    //     addToCart(findProductInDB);
    // };
      
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
                    //    onClick={()=>onAdd(cantidad)}
                    onClick={() => handleClick(product.id)}
                    >
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
