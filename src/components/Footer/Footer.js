import React from 'react'
import twiter from '../../assets/twiter.svg';
import insta from '../../assets/insta.svg'

import './footer.css';
const Footer = () => {
    return (
        <footer className="w-100  d-flex justify-content-between align-items-center">
            <div className="contenedor-derechos d-flex">
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
                    <li><a href="#"><img src={twiter}/></a></li>
                    <li><a href="#"><img src={insta}/></a></li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer;
