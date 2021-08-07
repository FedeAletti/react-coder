import {useState, useEffect} from 'react'
import { Item } from '../Item/Item'
import { useParams } from 'react-router-dom'
//import { useAppContext } from '../../context/AppContext/AppContext'
import { getItem } from '../Item/getItem'
//import prods from '../productos.json'


export const ItemList = () => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    

    useEffect(() => {
        if (categoryId === undefined ) {
            getItem()
            .then(resp => setProducts(resp))
        }else{
            getItem()
            .then(resp => setProducts(resp.filter(it => it.category === categoryId)))
        }
    },[categoryId])

    return (
        <div className="row ">
            {products.map(prod =>(
                <Item id={prod.id} title={prod.title} price={prod.price} brand={prod.brand} img={prod.picUrl} key={prod.id} />
            ))}  
        </div>
    )
}
