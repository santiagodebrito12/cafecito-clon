import React,{useState,useEffect,useContext} from 'react'
import Skeleton from 'react-loading-skeleton';
import img from '../../../assets/foto-seccion.svg';
import usuarioContext from '../../../Context/UsuarioContext';

import './Seccion1.css';

const Seccion1 = () => {
    const {cargando} = useContext(usuarioContext)
    
   
    if(cargando){
        return(
            <div className="contenedor-seccion ">
            <h2 className="text-center titulo-seccion"><Skeleton/></h2>
            <div className="contenedor-explicacion w-100 mt-4">
                {/* <img src={<Skeleton/>} alt="imagen-seccion" className="imagen-seccion"/> */}
                <div className=" contenedor-parrafos">
                    <div>
                        <h3><Skeleton/></h3>
                        <p><Skeleton/></p>
                    </div>
                    <div  className="mt-3">
                        <h3><Skeleton/></h3>
                        <p><Skeleton/></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }else{

    return (
        <div className="contenedor-seccion ">
            <h2 className="text-center titulo-seccion">¿Cómo funciona Cafecito?</h2>
            <div className="contenedor-explicacion w-100 mt-4">
                <img src={img} alt="imagen-seccion" className="imagen-seccion"/>
                <div className=" contenedor-parrafos">
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
}

export default Seccion1;

