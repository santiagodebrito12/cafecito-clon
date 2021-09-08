import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'


import './Header.css';

const Header = () => {
    
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="container contenedor-header">
           
            <div className="d-flex logo p-2">
                <Link to="/">
                <img src={logo} alt="logo"/>
                </Link>
                <h3 className="titulo">Cafecito</h3>   
            </div>
          
            <nav className={
                (openMenu ?"mt-2 p-2 open" : "mt-2 p-2 close")
            }>
                <ul>
                
                <li className="btn"><Link className="links explorar" to="/explore">Explorar</Link></li>
                <li className="btn ingresar"><Link className=" links ingresar" to="/auth">Ingresar</Link></li>

                </ul>
            </nav>
            <div className="contenedor-bars" onClick={()=>{
                if(openMenu){
                    setOpenMenu(false)
                }else{
                    setOpenMenu(true)
                }
            }}>
            <i class="fas fa-bars"  ></i>
            </div>
        </div>
    )
}

export default Header;
