import React,{useContext} from 'react'
import DescripcionDetail from './DescripcionDetail/DescripcionDetail';
import DetailHeader from './DetailHeader/DetailHeader';
import Donacion from './Donacion.js/Donacion';


import './UserDetail.css';

const UserDetail = () => {
    
  
    return (
        <div className="container contenedor-perfil">
                
                <DetailHeader/>

                 <div className="row  contenedor-info">
                   
                    <DescripcionDetail/>

                    <Donacion/>
               
                </div>
        </div>
    )
}

export default UserDetail;
