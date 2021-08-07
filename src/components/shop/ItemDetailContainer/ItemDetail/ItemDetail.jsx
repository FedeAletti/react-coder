import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { ItemCount } from '../../../ItemCount/ItemCount'
import { useCartContext } from '../../../context/CartContext/CartContext'
import { useAppContext } from '../../../context/AppContext/AppContext'
import { getItem } from '../../Item/getItem'


export const ItemDetail = () => {
    
    const [products, setProducts] = useState({})
    // console.log(products);
    const { itemId } = useParams()    
    
    useEffect(() => {
        if (itemId === undefined ) {
            getItem().then(resp => setProducts(resp))
        }else{
            getItem()
            .then(resp => setProducts(resp.filter(item => item.id === itemId)))
            getItem().then((resp) => setProducts(resp[itemId]));
        }
    },[itemId])

    const [count, setCount] = useState(0)
    
    //const { products, setProducts } = useAppContext();
    
    const onAdd=(cant)=>{
        // console.log(`Se almacenó ${cant} cantidad de ${products.title}`);
        setCount(cant)
        // setCart({item, ...cart} )
        // console.log(cart);
    }

    return (
        <>
            <div className=" d-flex justify-content-center align-items-center shadow">
                <div className="card w-100 ">
                    <div className="d-flex justify-content-between align-items-center container w-75 ">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mt-2">
                                    <div className="mt-5">
                                        <h4 className="main-heading mt-0">{products.brand}</h4>
                                        <h1 className="text-uppercase mb-0">{products.title}</h1>
                                        <h4 className="text-uppercase">${products.price}</h4>
                                        <hr />
                                        <h3 >Descripción: </h3>
                                        <p>{ products.description }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image"> 
                                    <img src={products.picUrl} className="img-fluid"  alt=""/> 
                                </div>
                                <div className="mb-4">
                                    <ItemCount product={products} initial={1} onAdd={onAdd} count={count} />
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
