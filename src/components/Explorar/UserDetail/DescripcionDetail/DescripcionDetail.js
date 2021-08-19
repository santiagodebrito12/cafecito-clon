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
                    <p> Naa, mentira. Estás en el lugar y en el momento indicado. Gracias por bancarme en esta y en todas! ❤️ 


                    Te quiero un montón. Le caerias bien a mi abuela. Ella salio con su primo.</p>

                    <div className="list-redes">
                    <a href="#" className="redes"><img src={twiter}/></a>
                    <a href="#" className="redes"><img src={insta}/></a>
                    <a href="#" className="redes"><img src={facebook}/></a>
                    <a href="#" className="redes"><img src={youtube}/></a>
                    </div>

                    <div className="mt-5">
                    <p><img src={logo} alt="logo"/> x {userSelect.donaciones} recibidos</p>
                    </div>
            </div>
        
    )
}

export default DescripcionDetail;
