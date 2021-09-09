import React,{useContext,useEffect,useState} from 'react'
import { getFirestore } from '../../../firebase/conector';
import logo from '../../../assets/logo.svg';

import { Link } from 'react-router-dom';
import './Explore.css';
import usuarioContext from '../../../Context/UsuarioContext';
import Slider from '../Slider/Slider';
import Input from '../../main/Input/Input';
import Skeleton from 'react-loading-skeleton';




const Explore = () => {
    const {users,busqueda,buscarCategoria,categoria,selectUser,getUsers,resetCategorias} = useContext(usuarioContext)
    
    

    const [loading,setLoading]= useState(true);
    useEffect(()=>{
    
      resetCategorias();
     
    },[])

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
            setLoading(false);
          })
          .catch(error => {
            console.log(error);
            setLoading(false);
          });
      }, []);

      if(loading){
          return(
            <section className="contenedor-explorar">
            <div className="container container-explorar">
                <Skeleton/>
            </div>
             <div className="container">
             <Skeleton/>
           </div>

            <div className="container mt-5 contenedor-usuarios">
  
          <ul className="d-flex flex-wrap">
          
         
         
              <Link className="card card-usuario">
              <li>
              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <h3 >{<Skeleton/>}</h3>
                      <h5 className="mt-2"> {<Skeleton/>}</h5>
                      <p className="mt-2 "> <Skeleton/></p>
              </div>
           
              </li>
              </Link>

              <Link className="card card-usuario">
              <li>
              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <h3 >{<Skeleton/>}</h3>
                      <h5 className="mt-2"> {<Skeleton/>}</h5>
                      <p className="mt-2 "> <Skeleton/></p>
              </div>
           
              </li>
              </Link>
              <Link className="card card-usuario">
              <li>
              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <h3 >{<Skeleton/>}</h3>
                      <h5 className="mt-2"> {<Skeleton/>}</h5>
                      <p className="mt-2 "> <Skeleton/></p>
              </div>
           
              </li>
              </Link>
             
              <Link className="card card-usuario">
              <li>
              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <h3 >{<Skeleton/>}</h3>
                      <h5 className="mt-2"> {<Skeleton/>}</h5>
                      <p className="mt-2 "> <Skeleton/></p>
              </div>
              </li>
              </Link>
              
              <Link className="card card-usuario">
              <li>
              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <h3 >{<Skeleton/>}</h3>
                      <h5 className="mt-2"> {<Skeleton/>}</h5>
                      <p className="mt-2 "> <Skeleton/></p>
              </div>
              </li>
              </Link>

              <Link className="card card-usuario">
              <li>
              <div className="mt-3 m-auto w-75 contenedor-text-card">
                      <h3 >{<Skeleton/>}</h3>
                      <h5 className="mt-2"> {<Skeleton/>}</h5>
                      <p className="mt-2 "> <Skeleton/></p>
              </div>
              </li>
              </Link>

              </ul>
            </div>  
            </section>  
          )
          }
      
        
      else{
    
    return (
  
      <section>
      
      <Slider/>
        
        <div className="container">
         {/* <Input
         mensaje="Buscar"
         placeholder="Buscar"
         name='usuario'
         /> */}

        </div>

        <div>
        </div>
      <div className="mt-5">
           
            {categoria ? <h3 className="titulo-explore text-center">{categoria}</h3> : <h3 className="uppercase text-center" >Destacados</h3>}

        
        <div className="container mt-5 contenedor-usuarios">
        
        <ul className="d-flex flex-wrap">
            
            {categoria 
            
            ?
            
            busqueda.map((user,i)=>{
               
                return(
                    <Link className="card card-usuario" onClick={()=>{
                        selectUser(user)
                    }} to="/explore/user" >
                    <li key={i}>
                    <div className="contendor-img">
                        <img src={user.img} alt="imagen-usuario" className="imagen-usuario"/>
                    </div>
    
                    <div className="mt-3 m-auto w-75 contenedor-text-card">
                            <h3 >{user.nombre}</h3>
                            <h5 className="mt-2"> {user.categoria}</h5>
                            <p className="mt-2 "><img src={logo} alt="icono-cafecito" /> X {user.donaciones} recibidos</p>
                    </div>
                 
                    </li>
                    </Link>
                )
            })
            
            :
            
            users.map((user,i)=>{
                

                return(
                    <Link className="card card-usuario" onClick={()=>{
                        selectUser(user)
                    }} to="/explore/user" >
                    <li key={i}>
                    <div className="contendor-img">
                        <img src={user.img} alt="imagen-usuario" className="imagen-usuario"/>
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
            
            
           


        </ul>
        </div>
        </div>
        
        </section>
    )
        }
}


export default Explore;
