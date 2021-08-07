import React from 'react'
import { useCartContext } from '../../../context/CartContext/CartContext';

export default function CartItem({product}) {
    const { deleteFromCart } = useCartContext();
    console.log(product)

    return (
      <div>
        <h4>{product.title}</h4>
        <p>{product.quantity ? product.quantity : 0}</p>
        <button
          onClick={() => deleteFromCart(product)}
        >X</button>


          <div className=" d-flex justify-content-center align-items-center shadow">
                <div className="card w-100 ">
                    <div className="d-flex justify-content-between align-items-center container w-75 ">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mt-2">
                                    <div className="mt-5">
                                        <h4 className="main-heading mt-0">{product.brand}</h4>
                                        <h1 className="text-uppercase mb-0">{product.title}</h1>
                                        <h4 className="text-uppercase">${product.price}</h4>
                                        <hr />
                                        <h3 >Descripción: </h3>
                                        <p>{ product.description }</p>
                                    </div>
                                    <div className="image"> 
                                    <img src={product.picUrl} className="img-fluid"  alt=""/> 
                                  </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}
  