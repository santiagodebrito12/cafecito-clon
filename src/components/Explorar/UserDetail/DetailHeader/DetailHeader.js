import React,{useContext} from 'react'
import usuarioContext from '../../../../Context/UsuarioContext'

import './DetailHeader.css';

const DetailHeader = () => {
    
    const{userSelect}=useContext(usuarioContext)
    return (
        <div className="row">
                <div className="col-4 m-auto contenedor-detalles-nombre">
                <img src={userSelect.img} className="img-usuario" alt="imagen-usuario"/>
                <h1 className="text-center mt-2">{userSelect.nombre}</h1>
                <p className="text-center text-uppercase">{userSelect.categoria}</p>
                <h3>Perfil</h3>
                </div>
        </div>
        
    )
}

export default DetailHeader;
