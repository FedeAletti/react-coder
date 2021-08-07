import React from 'react'
import { useCartContext } from '../../../context/CartContext/CartContext';

export default function CartItem({product}) {
    const { deleteFromCart } = useCartContext();
    //console.log(product)

    return (
      <div>
       

                        <div className="row container">
                            <div className="col-9 ">
                              <div className="card w-95 ">
                                <div className="row">
                                      <div className="col-md-9">
                                        <div className="mt-2 container">
                                          <div className="mt-5 p-4">
                                              <h4 className="main-heading mt-0">{`${product.brand} | ${product.quantity} unidades`}</h4>
                                              <h1 className="text-uppercase mb-0">{product.title}</h1>
                                              <h4 className="text-uppercase">${product.price * product.quantity}</h4>
                                              <hr />
                                              <button className="btn btn-success" onClick={() => deleteFromCart(product)}
                                                >Eliminar del Carrito</button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="image"> 
                                          <img src={product.picUrl} className="w-35 img-fluid"  alt=""/> 
                                        </div>
                                      </div>
                                </div> 
                              </div>  
                            </div>        
                            <div className="col-3">
                                  <div className="card w-100"> 
                                    <h1>Acá detalle compra gral!</h1> 
                                </div>
                            </div>                
                        </div>
                    
      </div>
    );
}
  