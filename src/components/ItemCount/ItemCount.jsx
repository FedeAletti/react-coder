import {useState} from 'react' 

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
            <div className="card text-center w-50">
                <div className="card-header">
                    <h4>Item</h4>
                </div>
                <div className="card-body"> 
                    <button onClick={handleRemove}>
                        -
                    </button>
                    <label className="alert alert-white">
                        {cantidad}
                    </label>
                    <button onClick={handleAdd}>
                        +
                    </button>                  
                    <div className="d-block">
                        <button className="btn btn-primary btn-block  "
                            onClick={()=>onAdd(cantidad)}>
                            Agregar al Carrito
                        </button>
                    </div>
                   

                </div>
            </div>
        </>
    )
}
