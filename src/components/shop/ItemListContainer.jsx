import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './itemscontainer.css'

export const ItemListContainer = (props) => {
    
    const {greetings} = props

    const handleCount=(cant)=>{
        alert(`Se agregaron ${cant} items`);
    }

    return (
        <>
            <div className="banner bg-principal pb-2 pt-2">
                <div className="container banner-1">
                    <h2>{greetings}</h2>   
                </div>
            </div>
            <div className="d-flex justify-content-center pt-2">
                <ItemCount stock={9} initial={1} onAdd={handleCount}/>
            </div>
        </>
    )
}
