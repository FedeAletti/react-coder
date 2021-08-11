import { useParams } from 'react-router-dom'
import './itemDetail.css'
import {useEffect, useState} from 'react'
import { ItemCount } from '../../../ItemCount/ItemCount'
import { useCartContext } from '../../../context/CartContext/CartContext'
import {Link} from 'react-router-dom'
//import { useAppContext } from '../../../context/AppContext/AppContext'
import { getFirestore } from '../../firebaseService'

export const ItemDetail = () => {
    
    const [products, setProducts] = useState({})
    // console.log(products);
    const { itemId } = useParams()    
    
    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('items').doc(itemId).get()
        .then(resp => setProducts({id: resp.id, ...resp.data()}))
    }, [itemId])
    console.log(products);

    const [count, setCount] = useState(0)
    const [terminar, setTerminar] = useState(false)
    const onAdd = (cant) => {
        //setCount(count + cant);
        setTerminar(true)
    };
  
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
                                    <img src={products.picUrl} className="img-fluid mt-3"  alt=""/> 
                                </div>
                                <div className="mb-4">
                                    {/* <ItemCount product={products} initial={1} onAdd={onAdd} count={count} /> */}
                                    {terminar ? (
                                        <>
                                        <Link  to={'/cart'} className="btn bg-principal text-white btn-carrito mt-2">
                                            
                                            Terminar Compra
                                        </Link>
                                        <button className="btn bg-principal text-white btn-carrito-mas " onClick={() => setTerminar(false)}>Agregar más</button>
                                        </>
                                    ) : (
                                        <ItemCount
                                        product={products}
                                        initial={1}
                                        onAdd={onAdd}
                                        count={count}
                                        />
                                    )}


                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
