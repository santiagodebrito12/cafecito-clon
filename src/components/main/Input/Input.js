import React,{useState} from 'react'
import './Input.css'
const Input = ({mensaje,placeholder}) => {
   
    const [categoria, setcategoria] = useState('')
   
    return (
        <div className="mt-4 contenedor-input m-auto">
        <form className="d-flex m-auto justify-content-around p-3 align-items-center form">
            <input
            type="text"
            placeholder={placeholder}
            className="input-crear"
            
            />
            <button className="btn  boton-crear">{mensaje}</button>
        </form>
        </div>
    )
}

export default Input;
