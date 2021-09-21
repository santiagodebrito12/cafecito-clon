import React,{useState,useContext} from 'react'
import { getFirestore } from '../../../../firebase/conector';
import './Donacion.css';

import logo from '../../../../assets/logo.svg';
import usuarioContext from '../../../../Context/UsuarioContext';
const Donacion = () => {
    const {userSelect}=useContext(usuarioContext);

    const [confirmacion,setConfirmacion]=useState(false);

    const [cantidad,setCantidad]=useState(0);
    const [nuevaDonacion, setnuevaDonacion] = useState({
        nombre:"",
        contacto:"",
        mensaje:"",

    })

    const handleChange = (e) =>{
        setnuevaDonacion({
            ...nuevaDonacion,
            [e.target.name]:e.target.value,

        })
    }
     const saveDonacion = () => {
        // setLoading(true);
        
        const db = getFirestore();
        const order = db.collection('donaciones');
        const newDonation  = {
          donante:nuevaDonacion.nombre,
          recibe:userSelect.nombre,
          contacto:nuevaDonacion.contacto,
          cantidad:cantidad,
          mensaje:nuevaDonacion.mensaje,
        };
        order
          .add(newDonation)
          .then(() => {
            setConfirmacion(true)
            
            setTimeout(() => {
                setConfirmacion(false)
            }, 5000);
          })
          .catch(error => {
            // setLoading(false);
            console.log(error);
          });
      };

    return (
        <div className="contenedor-donacion ">
        {confirmacion
        ? <div className="contenedor-mensaje">
            <i class="fas fa-check-circle fa-5x"></i>
            <p>¡Donacion realizada exitosamente!</p>
          </div>
    
    
        :
    
        <div>
            
        <h1 className=" descripcion mt-3">Tomamos un Cafecito ? </h1>
        <div className="w-50 d-flex ">
        <div className="m-2">
           <p><img src={logo} alt="logo"/> X </p> 
         </div>
        <div className="d-flex justify-content-around  contendor-botones m-2">
        <button onClick={()=>{
            if(cantidad>0){
                setCantidad(cantidad-1)
                return;
            }
        }}>-</button>
        <p className="mt-1">{cantidad}</p>
        <button onClick={()=>{
            setCantidad(cantidad + 1)
        }}>+</button>
        </div>                       
       
        
        </div>

        <div className="contenedor-form mb-4" onSubmit={(e)=>{
            e.preventDefault()
            saveDonacion()
        }}>
            <form>
            <input type="text" placeholder="Nombre (opcional)" className="w-100" name="nombre" onChange={handleChange}/>
            <input type="number" placeholder="Contacto (opcional, campo oculto al publico)"className="w-100" name="contacto"  onChange={handleChange}/>
            <textarea placeholder="Mensaje (opcional) "className="w-100" name="mensaje"  onChange={handleChange}></textarea>
            <button className="w-50 d-block m-auto" type="submit"
            >Invitame un cafecito!</button>
            </form>
        </div>
        </div>
    }
        </div>

       
    )
}

export default Donacion;
