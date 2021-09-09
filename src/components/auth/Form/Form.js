import React,{useState} from 'react'
import { getFirestore } from '../../../firebase/conector';
import './Form.css';

const Form = () => {
  
  const [inputValue, setinputValue] = useState({
    nombre:'',
    categoria:'',
    img:'',
    
    
  })


  const handleChange = (e) =>{
        setinputValue({
          ...inputValue,
          [e.target.name]:e.target.value
        })
    }
   const saveUser = () => {
    // setLoading(true);
    
    const db = getFirestore();
    const order = db.collection('users');
    const newUser = {
      nombre:inputValue.nombre,
      categoria:inputValue.categoria,
      imagen:inputValue.img,
      donaciones:0,
    };
    order
      .add(newUser)
    //   .then(({ id }) => {
    //     // setLoading(false);
        
    //   })
      .catch(error => {
        // setLoading(false);
        console.log(error);
      });
  };
    
    return (
        <div className="container m-auto ">
        <form  className="contenedor-form ">
        
        <input
        type='text'
        placeholder="Ingrese Su nombre Completo"
        className="w-50 p-1  input"
        name="nombre"
        onChange={(e)=>{
          handleChange(e)
        }}

        />
         <input
        type='text'
        placeholder="Ingrese Su Categoria"
        className="w-50 p-1  input"
        name='categoria'
        onChange={(e)=>{
          handleChange(e)
        }}
        />  
         <input
        type='file'
        placeholder="Ingrese Su Categoria"
        className="w-50 p-1  input"
        name='img'
        onChange={(e)=>{
          handleChange(e)
        }}
        />  
     
         
        <button className="btn ingresar d-block w-25" onClick={(e)=>{
            e.preventDefault();
            saveUser();
        }}>Regristate</button>
        </form>        
        </div>
    )
}

export default Form;
