import React from 'react'

export const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">ShishaShop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse show m-auto" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <a className="nav-link nav-link-p" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-p" href="#">Narguilas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-p" href="#">Tabacos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-p" href="#">Carbones</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link nav-link-p dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accesorios
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Mangueras</a></li>
                                <li><a class="dropdown-item" href="#">Cabezales</a></li>
                                <li><a class="dropdown-item" href="#">Otros</a></li>
                            </ul>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
