import React,{useContext} from 'react'
import './DescripcionDetail.css';

import twiter from '../../../../assets/twiter.svg';
import insta from '../../../../assets/insta.svg';
import facebook from '../../../../assets/facebook.svg';
import youtube from '../../../../assets/youtube.svg';
import logo from '../../../../assets/logo.svg';
import usuarioContext from '../../../../Context/UsuarioContext';

const DescripcionDetail = () => {
    const {userSelect} = useContext(usuarioContext)
    
    return (
        
            <div className="col-5 contenedor-descripcion ">
                    <h1 className=" descripcion">Descripcion : </h1>
                    <p>{userSelect.descripcion}</p>

                    <div className="list-redes">
                    <a href="#" className="redes"><img src={twiter} alt="twiter"/></a>
                    <a href="#" className="redes"><img src={insta} alt="instagram"/></a>
                    <a href="#" className="redes"><img src={facebook} alt="facebook"/></a>
                    <a href="#" className="redes"><img src={youtube} alt="youtube"/></a>
                    </div>

                    <div className="mt-5">
                    <p><img src={logo} alt="logo"/> x {userSelect.donaciones} recibidos</p>
                    </div>
            </div>
        
    )
}

export default DescripcionDetail;
