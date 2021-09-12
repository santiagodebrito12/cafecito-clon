import React,{useState,useContext} from 'react'
import Form from './Form/Form';
import GoogleAuth from './GoogleAuth/GoogleLogin';
import './Auth.css';

import usuarioContext from '../../Context/UsuarioContext';

const Auth = () => {
   const{activeUser}=useContext(usuarioContext)
 
   const [form, setForm] = useState(false);
   const [login,setLogin]=useState(false);

    return (
        <div className="container w-75  contenedor-authentificacion ">
            <div>
            <h2 className="text-center mb-3">Registrate en Cafecito!</h2>
            <hr/>
            </div>
            {(!form && !login) && <button  className="btn ingresar btn-nuevo-usuario p-2 w-50" onClick={()=>{
                if(!form){
                    setForm(true)
                }else{
                    setForm(false);
                }
            }}>Nuevo Usuario </button>}
            

            {form 
            &&
            <Form/>
            }

            {(!form && !login) && <button  className="btn ingresar btn-nuevo-usuario p-2 w-50" onClick={()=>
            {
                setLogin(true);
            }}>Ingresar</button>}
           
            {login
            && <GoogleAuth/>}
        </div>
    )
}

export default Auth;
