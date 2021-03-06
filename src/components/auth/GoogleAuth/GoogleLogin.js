import React,{useContext,useState} from 'react'
import { Redirect } from 'react-router';
import usuarioContext from '../../../Context/UsuarioContext';
import validator from 'validator';

import './GoogleLogin.css';
const GoogleLogin = () => {
       const {activeUser}=useContext(usuarioContext)
       
      
       if(!activeUser){
       return(
           <GoogleButton/>
       )
      }else{
        
        return(
           <Redirect to="/"/>
        )
        
         
      }
}

const GoogleButton = () =>{
    const {googleAuth,setActiveUser}=useContext(usuarioContext);
    
    const [userEmail, setuserEmail] = useState({
        email:"",
        password:"",
       
    })

    const [error, setError] = useState(false)

    const handleChange = (e) =>{
        
        setuserEmail({
            ...userEmail,
            [e.target.name]:e.target.value
        })
    }
    
    const{email,password}=userEmail;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( !validator.isEmail(email) || password.trim()==="" ){
            console.log('cambio obligatorio')
            setError(true);
            return;
        }  
        setError(false);
        setTimeout(() => {
            setActiveUser(true)

        }, 1000);
    }
    
    return(
        <div className="container">
            <div className="auth__social-networks">

            <div 
                    className="redes-btn btn-google"
                    onClick={()=>{
                    
                        googleAuth();
                        
                    }}
                >
                    <div className="google-icon-wrapper">
                    <i className="fab fa-google  icono"></i>
                    
                    </div>
                    <p className="btn-text" id="google-text">
                        <b>Ingresar con google</b>
                    </p>
                </div>
                </div>





        <div className="email-auth mt-5">
            <h4 className="text-center">Ingresar con correo Electronico</h4>
            <form className="d-flex flex-column align-items-center justify-content-center" onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="ingrese su correo electronico"
                className={error ? " m-2 input-email input-err" : " m-2 input-email"}
                name="email"
                onChange={handleChange}/>

                <input 
                type="password"
                placeholder="ingrese su contrase??a"
                className={error ? " m-2 input-email input-err" : " m-2 input-email"}
                name="password"
                onChange={handleChange}/>

                {/* <input 
                type="password"
                placeholder="repetir contrase??a"
                className={error ? "w-75 m-2 input-email input-err" : "w-75 m-2 input-email"}
                name="confirmPassword"
                onChange={handleChange}/> */}
                
                <button className="btn  sign-in" type="submit">Ingresar</button>
            </form>
            
        </div>
        

       
       
            
        
        </div>
    )
}
export default GoogleLogin;
