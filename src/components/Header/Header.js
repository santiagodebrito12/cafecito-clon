import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import ThemeContext from '../../Context/ThemeContext/ThemeContext';
import ThemeIcon from '../ThemeIcon/ThemeIcon';


import './Header.css';

const Header = () => {
    const{setTheme,isDark}= useContext(ThemeContext)
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="container contenedor-header">
           
            <div className="d-flex logo p-2 mt-1">
                <Link to="/">
                <img src={logo} alt="logo"/>
                </Link>
                <h3 className="titulo">Cafecito</h3>   
            </div>
          
            <nav className={
                (openMenu ?"mt-2 p-1 open " : "mt-2 p-2 close ")
            }>
                <ul>
                <li className="btn mt-2" onClick={()=>{
                    setTheme();
                }}><ThemeIcon/></li>
                <li className="btn"><Link className="links explorar" to="/explore">Explorar</Link></li>
                <li className="btn ingresar"><Link className=" links ingresar" to="/auth" id="ingresar-header">Ingresar</Link></li>

                </ul>
            </nav>
            <div className="contenedor-bars " onClick={()=>{
                if(openMenu){
                    setOpenMenu(false)
                }else{
                    setOpenMenu(true)
                }
            }}>
            <i className={isDark ? "fas fa-bars burguer burguer-dark" :"fas fa-bars burguer"}  ></i>
            </div>
        </div>
    )
}

export default Header;
