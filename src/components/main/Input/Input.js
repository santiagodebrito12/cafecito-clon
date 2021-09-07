import React,{useState,useContext} from 'react'
import Skeleton from 'react-loading-skeleton';
import usuarioContext from '../../../Context/UsuarioContext'
import './Input.css'
const Input = ({mensaje,placeholder,name}) => {
    const {busquedaUser,cargando} = useContext(usuarioContext);

    const [value, setValue] = useState('')

    const handleChange = e =>{
        setValue(
            [e.target.name] = e.target.value
        )
    }
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(value.trim() ===''){
            console.log('debes ingresar un usuario')
           return;

        }
        
        busquedaUser(value);
    }


    if(cargando){
        return(
            <Skeleton className="mt-4 contenedor-input m-auto">
            <Skeleton className="d-flex m-auto justify-content-around p-3 align-items-center form">
               
                <button className="btn  boton-crear" ><Skeleton/></button>
            </Skeleton>
            </Skeleton>
        )
    }else{

    
    return (
        <div className="mt-4 contenedor-input m-auto">
        <form className="d-flex m-auto justify-content-around p-3 align-items-center form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder={placeholder}
            className="input-crear"
            onChange={handleChange}
            name={name}
            />
            <button className="btn  boton-crear" >{mensaje}</button>
        </form>
        </div>
    )
    }
}

export default Input;
