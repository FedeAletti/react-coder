import {useState, useEffect} from 'react'
import { Item } from '../Item/Item'
import prods from '../productos.json'

export const ItemList = () => {

    const [state, setState] = useState([])

    useEffect(() => {
        setTimeout(()=>{
            setState(prods)
        },2000);
    }, []);

    return (
        <div className="row ">
            {state.map(prod =>(
                <Item title={prod.title} price={prod.price} brand={prod.brand} img={prod.picUrl} key={prod.id} />
            ))} 
        </div>
    )
}
