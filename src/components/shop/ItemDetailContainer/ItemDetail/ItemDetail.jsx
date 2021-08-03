import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { getItem } from '../getItem'
import { ItemCount } from '../../../ItemCount/ItemCount'


export const ItemDetail = () => {
    
    const [item, setItem] = useState({})
    const { itemId } = useParams()


    useEffect(() => {
        if (itemId === undefined ) {
            getItem().then(resp => setItem(resp))
        }else{
            // getItem()
            // .then(resp => setItem(resp.filter(item => item.id === itemId)))
            getItem().then((resp) => setItem(resp[itemId]));
        }
    },[itemId])

    // const [count, setCount] = useState(1)
    
    // const handleCount=(cant)=>{
    //     //alert(`Se agregaron ${item.cant} items de ${item.brand + ' ' + item.title}`);
    //     setCount(cant)
    //     console.log(count);
    //     return ( 
    //         <div>{count}</div>
    //      )
    // }
    

    return (
        <>
            <div className=" d-flex justify-content-center align-items-center shadow">
                <div className="card w-100 ">
                                <div className="d-flex justify-content-between align-items-center container w-75 ">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mt-2">
                                                <div className="mt-5">
                                                    <h4 className="main-heading mt-0">{item.brand}</h4>
                                                    <h1 className="text-uppercase mb-0">{item.title}</h1>
                                                    <h4 className="text-uppercase">${item.price}</h4>
                                                    <hr />
                                                    <h3 >Descripción: </h3>
                                                    <p>{ item.description }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="image"> 
                                                <img src={item.picUrl} className="img-fluid"  alt=""/> 
                                            </div>
                                            
                                            <div className="mb-4">
                                                <ItemCount stock={item.stock} initial={1} onAdd={handleCount}/>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                            
                        
                        
                </div>
            </div>



        </>
    )
}
