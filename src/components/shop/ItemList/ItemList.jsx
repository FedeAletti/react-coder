import {useState, useEffect} from 'react'
import { Item } from '../Item/Item'
import { useParams } from 'react-router-dom'
import { getItem } from '../ItemDetailContainer/getItem'
//import prods from '../productos.json'


export const ItemList = () => {

    const [item, setItem] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId === undefined ) {
            getItem()
            .then(resp => setItem(resp))
        }else{
            getItem()
            .then(resp => setItem(resp.filter(it => it.category === categoryId)))
        }
    },[categoryId])

    

    return (
        <div className="row ">
            {item.map(prod =>(
                <Item id={prod.id} title={prod.title} price={prod.price} brand={prod.brand} img={prod.picUrl} key={prod.id} />
            ))} 
        </div>
    )
}
