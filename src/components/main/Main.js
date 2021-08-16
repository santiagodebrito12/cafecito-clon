import React from 'react'
import Titulo from './Titulo/Titulo';
import Input from './Input/Input';
import Footer from '../Footer/Footer';

import './Main.css'
import Seccion1 from './Seccion1/Seccion1';
import Seccion2 from './Seccion2/Seccion2';
const Main = () => {
    return (
       <div>
        <div className="container mt-4 contenedor-main">
            
            <Titulo/>
            
            <Input
            mensaje= "Crear cuenta"
            placeholder= "cafecito.app/"
            />
        </div>
        <div className="w-100 seccion1-bg mt-5">
            <div className="container">
                <Seccion1/>
            </div>
        </div>
        <div className="container">
            <Seccion2/>
        </div>

        
        </div>
    )
}

export default Main;
