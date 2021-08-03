// import {useEffect, useState} from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
//import { getItem } from './getItem'

export const ItemDetailContainer = () => {
    return (
        <>    
            <div className="container mt-2">
                <div className="row">
                    <ItemDetail />  
                </div>
            </div>
        </>
    )
}
