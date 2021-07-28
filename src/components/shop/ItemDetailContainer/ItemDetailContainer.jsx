// import {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
//import { getItem } from './getItem'

export const ItemDetailContainer = () => {
    
    // const [item, setItem] = useState([])

    // const { itemId } = useParams()

    // console.log(itemId);

    // useEffect(() => {
    //     if (itemId === undefined ) {
    //         getItem()
    //         .then(resp => setItem(resp))
    //     }else{
    //         getItem()
    //         .then(resp => setItem(resp.filter(it => it.id === itemId )))
    //     }
    // },[itemId])
    
    // console.log(itemId);

    return (
        <>    
            <div className="container mt-2">
                    <ItemDetail />  
            </div>
        </>
    )
}
