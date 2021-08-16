import React from 'react'
import './Form.css';

const Form = () => {
    return (
        <div className="container m-auto ">
        <form  className="contenedor-form ">
        <input
        type='text'
        placeholder="Ingrese Su nombre Completo"
        className="w-50 p-1  input"
        /> 
         <input
        type='text'
        placeholder="Ingrese Su Categoria"
        className="w-50 p-1  input"
        />  
         <input
        type='text'
        placeholder="Ingrese Su nombre Completo"
        className="w-50 p-1 input"
        />     
        <button className="btn ingresar d-block w-25">Regristate</button>
        </form>        
        </div>
    )
}

export default Form;
