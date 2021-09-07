import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { categorias } from '../../../Categorias';
import usuarioContext from '../../../Context/UsuarioContext';
import './Slider.css';

const Slider = () => {
    
    const {categoria,setCategoria,users}=useContext(usuarioContext);
 
    const [CAT,SETCAT]=useState([]);
    
   
    return (
        <div className="container">
            
           
            <div className="slider">
                {/* <ul className="d-flex lista-categorias ">
                    {categorias.map(categoria=>{
                        return(
                            <Link className="link card-categoria" value={categoria.categoria}  onClick={()=>{
                                setCategoria(categoria.categoria)
                            }}>
                            <li className="d-flex">
                                <img src={categoria.img} value={categoria.categoria}/>
                                <p className="text-center">{categoria.categoria}</p>
                            </li>
                            </Link>

                        )
                    })}
                     </ul>
                    */}
                    
               
            </div>
          
             
        </div>
    )
}

export default Slider;
