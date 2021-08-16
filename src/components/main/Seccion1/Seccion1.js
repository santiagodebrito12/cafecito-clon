import React from 'react'
import img from '../../../assets/foto-seccion.svg';

import './Seccion1.css';

const Seccion1 = () => {
    return (
        <div className="contenedor-seccion ">
            <h2 className="text-center titulo-seccion">¿Cómo funciona Cafecito?</h2>
            <div className="contenedor-explicacion d-flex justify-content-around w-100 mt-4">
                <img src={img} alt="imagen-seccion" className="imagen-seccion"/>
                <div className="w-25 contenedor-parrafos">
                    <div>
                        <h3>Creá tu cuenta</h3>
                        <p>Solo te llevará 60 segundos personalizar tu perfil y comenzar a compartir lo que hacés.</p>
                    </div>
                    <div  className="mt-3">
                        <h3>Creá contenido</h3>
                        <p>Contale a tu comunidad sobre Cafecito y tus objetivos, publicalo en redes sociales así más personas podrán ver tu perfil</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seccion1;

