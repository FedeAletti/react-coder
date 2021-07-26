import {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { getItem } from './getItem'

export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem()
        .then(resp => setItem(resp))
    },[])
    const itemFiltrado = item.filter(item => item.price > 450 )
    
    return (
        <>
            
                {itemFiltrado.map(itemDetail=> <ItemDetail item={itemDetail} key={itemDetail.id} />)}
            
        </>
    )
}
