import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { getItem } from './getItem'

export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])

    const { itemId } = useParams()

    console.log(itemId);

    useEffect(() => {
        getItem()
            .then(resp => setItem(resp.filter(it => console.log(it.id === itemId))))
    }, [itemId])

    // useEffect(() => {
    //     if (itemId === undefined ) {
    //         getItem()
    //         .then(resp => setItem(resp))
    //     }else{
    //         getItem()
    //         .then(resp => setItem(resp.filter(it => console.log(it.id === itemId))))
    //     }
    // },[itemId])
    console.log(itemId);
    //it.id=== itemId
    
    return (
        <>    
            <div className="container mt-2">
                {item.map(itemDetail=> 
                    <ItemDetail item={itemDetail} key={itemDetail.id} />)}  
            </div>
        </>
    )
}
