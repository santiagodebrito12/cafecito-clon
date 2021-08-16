import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'


import './Header.css';

const Header = () => {
    return (
        <div className="container contenedor-header">
           
            <div className="d-flex logo p-2">
                <Link to="/">
                <img src={logo} alt="logo"/>
                </Link>
                <h3 className="titulo">Cafecito</h3>   
            </div>
          
            <nav className="mt-2 p-2">
                <ul>
                <li className="btn"><Link className="links explorar" to="/explore">Explorar</Link></li>
                <li className="btn ingresar"><Link className=" links ingresar" to="/auth">Ingresar</Link></li>

                </ul>
            </nav>
        </div>
    )
}

export default Header;
