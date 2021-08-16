import React,{useContext,useEffect,useState} from 'react'
// import {Usuarios} from '../../../Usuarios';
import { getFirestore } from '../../../firebase/conector';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './Explore.css';
import usuarioContext from '../../../Context/UsuarioContext';

import usuario1 from '../../../assets/usuarios/usuario1.jpg';
import usuario3 from '../../../assets/usuarios/usuario2.jpg';
import usuario4 from '../../../assets/usuarios/usuario3.jpg';
import usuario5 from '../../../assets/usuarios/usuario4.png';
import usuario2 from '../../../assets/usuarios/usuario5.jpg';
import usuario9 from '../../../assets/usuarios/usuario6.jpg';
import usuario7 from '../../../assets/usuarios/usuario7.png';
import usuario8 from '../../../assets/usuarios/usuario8.jpg';
import usuario6 from '../../../assets/usuarios/usuario9.png';


const Explore = () => {
    const {users,busqueda,buscarCategoria,categoria,selectUser,getUsers} = useContext(usuarioContext)
    
 
    // const [users, setUsers] = useState([]);

    const [loading,setLoading]= useState(false);
   
    useEffect(() => {
        buscarCategoria(categoria)
    }, [categoria])

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('users');
        itemCollection
          .get()
          .then(querySnapshot => {
            if (querySnapshot.size === 0) {
              console.log('no results');
              setLoading(false);
              return;
            }
            
               getUsers(querySnapshot.docs.map(doc =>doc.data()));
            //   setUsers(querySnapshot.docs.map(doc =>doc.data()));
            setLoading(false);
          })
          .catch(error => {
            console.log(error);
            setLoading(false);
          });
      }, []);

      

    console.log(users);
    return (
       <div className="mt-5">
           
            {categoria ? <h3 className="uppercase text-center">{categoria}</h3> : <h3 className="uppercase text-center" >Destacados</h3>}

        
        <div className="container mt-5 contenedor-usuarios">
        
        <ul className="d-flex flex-wrap">
            {categoria 
            ?
            busqueda.map((user,i)=>{
                const imagenes =[usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario6,usuario7,usuario8,usuario9]
                return(
                    <Link className="card card-usuario" onClick={()=>{
                        selectUser(user)
                    }} to="/user" >
                    <li key={i}>
                    <div className="contendor-img">
                        <img src={imagenes[i]} alt="imagen-usuario" className="imagen-usuario"/>
                    </div>
    
                    <div className="mt-3 m-auto w-75 contenedor-text-card">
                            <h3 >{user.nombre}</h3>
                            <h5 className="mt-2"> {user.categoria}</h5>
                            <p className="mt-2"><img src={logo} alt="icono-cafecito" /> X {user.donaciones} recibidos</p>
                    </div>
                 
                    </li>
                    </Link>
                )
            })
            :
            users.map((user,i)=>{
                const imagenes =[usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario6,usuario7,usuario8,usuario9]

                return(
                    <Link className="card card-usuario" onClick={()=>{
                        selectUser(user)
                    }} to="/user" >
                    <li key={i}>
                    <div className="contendor-img">
                        <img src={imagenes[i]} alt="imagen-usuario" className="imagen-usuario"/>
                    </div>
    
                    <div className="mt-3 m-auto w-75 contenedor-text-card">
                            <h3 >{user.nombre}</h3>
                            <h5 className="mt-2"> {user.categoria}</h5>
                            <p className="mt-2"><img src={logo} alt="icono-cafecito" /> X {user.donaciones} recibidos</p>
                    </div>
                 
                    </li>
                    </Link>
                )
            })}
            
            
            {/* {users.map((user,i)=>{
               const imagenes =[usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario6,usuario7,usuario8,usuario9]
               
               return(
                    <Link className="card card-usuario" onClick={()=>{
                        selectUser(user)
                    }} to="/user" >
                    <li key={i}>
                    <div className="contendor-img">
                        <img src={imagenes[i]} alt="imagen-usuario" className="imagen-usuario"/>
                    </div>
    
                    <div className="mt-3 m-auto w-75 contenedor-text-card">
                            <h3 >{user.nombre}</h3>
                            <h5 className="mt-2"> {user.categoria}</h5>
                            <p className="mt-2"><img src={logo} alt="icono-cafecito" /> X {user.donaciones} recibidos</p>
                    </div>
                 
                    </li>
                    </Link>
    
                )
            })} */}


        </ul>
        </div>
        </div>
        

    )
}

export default Explore;
