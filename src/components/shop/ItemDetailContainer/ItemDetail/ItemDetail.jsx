import React from 'react'

export const ItemDetail = ({item}) => {
    
    return (
        <>
            <div className="height d-flex justify-content-center align-items-center">
                <div className="card p-3 w-100 ">
                    <div className="d-flex justify-content-between align-items-center container w-75 ">
                        <div className="mt-2">
                            <div className="mt-5">
                                <h5 className="text-uppercase mb-0">{item.title}</h5>
                                <h1 className="main-heading mt-0">{item.brand}</h1>
                                <h4 className="text-uppercase">${item.price}</h4>
                                <hr />
                                <h3>Descripción: </h3>
                                <p>{ item.description }</p>
                            </div>
                        </div>
                        <div className="image"> 
                            <img src={item.picUrl}  alt=""/> 
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
