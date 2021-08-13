import {Link} from 'react-router-dom'
import { CartWidget } from '../cartwidget/CartWidget'
import { useCartContext } from '../context/CartContext/CartContext'
import './navbar.css'
import logo from './navlogo.svg'


export const NavBar = () => {

    const {cart} = useCartContext()

    return (
        <>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/"><img className="logo-nav" src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>  
                
                { cart.length === 0 ? 
                    <></>
                    :
                    // <Link to="/cart" className="cartWidget"><CartWidget/></Link>          
                    <CartWidget />
                }
                
                <div className="collapse navbar-collapse show m-auto flex-navbar" id="navbarBasic">
                    <div className="">
                        <ul className="flex-navbar navbar-nav me-auto mb-2 mb-xl-0">
                            
                                <Link to="/category/narguilas" className="nav-link nav-link-p" >Narguilas</Link>
                            
                                <Link to="/category/tabacos" className="nav-link nav-link-p">Tabacos</Link>
                            
                                <Link to="/category/carbones" className="nav-link nav-link-p" >Carbones</Link>

                                <Link to="/category/accesorios" className="nav-link nav-link-p" >Accesorios</Link>                        
                                
                                
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </nav>

        </>
    )
}
