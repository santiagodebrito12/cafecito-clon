import React,{useContext} from 'react'
import twiter from '../../assets/twiter.svg';
import insta from '../../assets/insta.svg'

import './footer.css';
import usuarioContext from '../../Context/UsuarioContext';

const Footer = () => {
    
    const{cargando}= useContext(usuarioContext);
    
    return (
        <footer className={cargando && "footer"}>
            <div className="contenedor-derechos">
                <p>© 2021 Cafecito.</p>
                <div>
                    <ul className="lista-derechos">
                    <li><a href="#"> Preguntas Frecuentes</a></li>
                    <li><a href="#">Terminos y politica de privacidad</a></li>
                    </ul>
                </div>
            </div>
            <div className="contenedor-redes">
                <ul className="d-flex lista-redes justify-content-around">
                    <li><a href="#"><img src={twiter} alt="imagen-twitter"/></a></li>
                    <li><a href="#"><img src={insta} alt="imagen-insta"/></a></li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer;
