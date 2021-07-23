import {useState} from 'react' 
import './itemcount.css'

export const ItemCount = ({initial, stock, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial)
    const handleAdd=()=>{
            if (cantidad<stock) {
                setCantidad(cantidad+1)
            }
        }
    const handleRemove=()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1)
        }
    }
  
    return (
        <>
            <div className="row mt-1"> 
                <div className="col-6">
                    <button onClick={handleRemove}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <label className="alert alert-white cantidad-items">
                        {cantidad}
                    </label>
                    <button onClick={handleAdd}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className=" col-6 agreg-carrito">
                    <button className="btn bg-principal text-white btn-block  "
                        onClick={()=>onAdd(cantidad)}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </>
    )
}
