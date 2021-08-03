import {useState} from 'react' 
import { ButtonShop } from './ButtonShop/ButtonShop';
import './itemcount.css'


// function Select({ options, onSelect, defaultOption }) {
//     return (
//       <select onChange={(e) => onSelect(e.target.value)}>
//         {options.map((o) => (
//           <option value={o.value}>{o.text}</option>
//         ))}
//       </select>
//     );
// }




export const ItemCount = ({initial, stock, onAdd, count}) => {

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
                    <ButtonShop onAdd={onAdd} count={count} cantidad={cantidad}/>
                </div>
            </div>
            
        </>
    )
}
