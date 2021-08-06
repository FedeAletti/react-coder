import {Link} from 'react-router-dom'
import './item.css'

export const Item = ({title, price, img, brand, id}) => { 
    
    return (
        <div className="col mb-2 ">
            <div className="height d-flex justify-content-center align-items-center">
                <div className="card p-3 w-100">
                   
                    <div className="d-flex justify-content-evenly align-items-center ">
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
                    <div className="row">
                        <div className="col ver-mas mt-4">
                            <Link to={`/item/${id}`} className="w-100 btn bg-principal text-white d-block">Ver mas</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
