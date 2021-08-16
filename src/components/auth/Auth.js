import React,{useState} from 'react'
import Form from './Form/Form';
import './Auth.css';

const Auth = () => {
   
   const [form, setForm] = useState(false);

    return (
        <div className="container w-75 mt-5 m-auto contenedor-auth ">
            <h2 className="text-center mb-3">Registrate en Cafecito!</h2>
            <hr/>
            <button className="btn ingresar btn-nuevo-usuario p-2 w-50" onClick={()=>{
                if(!form){
                    setForm(true)
                }else{
                    setForm(false);
                }
            }}>Nuevo Usuario</button>

            {form 
            &&
            <Form/>
            }

            {!form && <button  className="btn ingresar btn-nuevo-usuario p-2 w-50">Ingresar</button>}
                     
           
        </div>
    )
}

export default Auth;
