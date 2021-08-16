import React from 'react'

import './Seccion2.css'
import usuario1 from '../../../assets/usuarios/usuario1.jpg';
import usuario2 from '../../../assets/usuarios/usuario2.jpg';
import usuario3 from '../../../assets/usuarios/usuario3.jpg';

const comentarios = [
    {
        nombre: 'Hernán Panessi',
        img:usuario1,
        categoria:'Periodismo',
        comentario:'Cafecito es una plataforma facilitadora: acerca, simplifica y amplifica. En lo personal, como periodista, me dio la mayor de las alegrías posibles: permitir que mis libros vuelvan a circular y que terminaran encontrando más (y nuevos) lectores.',
    },
    {
        nombre: 'Bauhasaurus',
        img:usuario2,
        categoria:'Arquitectura',
        comentario:'Cafecito permite sustentar tus proyectos de una manera intuitivamente sencilla: Tendiendo un puente retórico entre invitar a alguien a tomar algo en forma de agradecimiento y una aplicación digital. Parece difícil que algo analógico tenga resonancia en lo digital, pero Cafecito lo logra.',
    },
    {
    nombre: 'Nillusart',
    img:usuario3,
    categoria:'Arte',
    comentario:'Cafecito es una plataforma que ayuda mucho a los emprendedores y creadores de contenido. Yo lo encontré como una forma de conectarme con mis seguidores donde ellos pueden ayudarme a seguir creando con su aporte y mejorar mí espacio de trabajo.',
    }
]
const Seccion2 = () => {
    return (
        <div className="w-100  contenedor-seccion2">
            <h2 className="text-center">¿Que dicen de Cafecito?</h2>
         
            <div className="contenedor-comentarios m-auto w-100">
                <ul className="d-flex m-auto justify-content-between ">
                   
                   {comentarios.map(usuario=>{
                       return(
                        <li className="card">
                        <div className="header-card d-flex justify-content-between align-items-center mt-2">
                            <img src={usuario.img} alt="img-usuario" className="imagen-usuario"/>
                            <div className="header-text w-50">
                              <h4>{usuario.nombre}</h4>
                              <p>{usuario.categoria}</p>
                            </div>
                        </div>
                        <div className="mt-5">

                        <p>{usuario.comentario}</p>
                        </div>
                    </li>
                       )
                   })}
                   
                    
                    
                </ul>
            </div>
        
        
        </div>
    )
}

export default Seccion2;
