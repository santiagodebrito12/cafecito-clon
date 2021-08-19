import React from 'react'
import './Donacion.css';

import logo from '../../../../assets/logo.svg';
const Donacion = () => {
    return (
        <div className="col-6 contenedor-donacion ">
                    <h1 className=" descripcion mt-3">Tomamos un Cafecito ? </h1>
                    <div className="w-50 d-flex ">
                    <div className="m-2">
                       <p><img src={logo} alt="logo"/> X </p> 
                     </div>
                    <div className="d-flex justify-content-around  contendor-botones m-2">
                    <button>-</button>
                    <p className="mt-1">0</p>
                    <button>+</button>
                    </div>                       
                   
                    
                    </div>
            </div>
    )
}

export default Donacion;
