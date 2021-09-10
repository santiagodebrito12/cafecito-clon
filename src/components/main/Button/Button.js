import React from 'react'
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import usuarioContext from '../../../Context/UsuarioContext';

import '../Input/Input.css';

const Button = () => {
    const{cargando}=useContext(usuarioContext);
    if(cargando){
        return(
            <Skeleton className="container">
            
            <Skeleton><Skeleton className="btn"><Skeleton/></Skeleton></Skeleton>
           </Skeleton>
        )
    }else{

  
    return (
        <div className="container">
            
            <Link className="link" to="/auth" ><button className="btn boton-crear m-auto" >Crear Cuenta</button></Link>
        </div>
    )
}
}

export default Button
