import React from 'react'
import { ItemCount } from '../../ItemCount/ItemCount'

export const Item = ({title, price, img, brand}) => { 

    const handleCount=(cant)=>{
        alert(`Se agregaron ${cant} items de ${brand + ' ' + title}`);
    }
    
    return (
        <div className="col mb-2 ">
            <div className="height d-flex justify-content-center align-items-center">
                <div className="card p-3 ">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="mt-2">
                            <h4 className="text-uppercase">${price}</h4>
                            <div className="mt-5">
                                <h5 className="text-uppercase mb-0">{title}</h5>
                                <h1 className="main-heading mt-0">{brand}</h1>
                            </div>
                        </div>
                        <div className="image"> 
                            <img src={img} width="200" alt=""/> 
                        </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <ItemCount stock={9} initial={1} onAdd={handleCount}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
