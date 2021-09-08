import React,{useContext,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
// import { categorias } from '../../../Categorias';
import usuarioContext from '../../../Context/UsuarioContext';
import './Slider.css';







const Slider = () => {
    
    const {setCategoria,users}=useContext(usuarioContext);
    
    const Cats = new Set();
    let arr = [];
   
    users.map(user=>{
        Cats.add(user.categoria)
    })
   
    Cats.forEach(cat=>{
        arr = [...arr,cat]
    })
    
    


    

    return (
        <div className="container">
            
           
            <div className="slider">
                { <ul className=" lista-categorias flex-wrap">
                    
                    {arr.map(categoria=>{
                        
    
                        return(
                            <Link className="link card-categoria" value={categoria}  onClick={()=>{
                                setCategoria(categoria)
                            }}>
                            <li className="d-flex">
                                <i className="far fa-star fa-2x star"></i>
                                {/* <img src={`Icono ${categoria}`} value={categoria}/> */}
                                <p className="text-center">{categoria}</p>
                            </li>
                            </Link>

                        )
                    })}
                        
                     </ul>
                    }
                    
               
            </div>
          
             
        </div>
    )
}

export default Slider;
