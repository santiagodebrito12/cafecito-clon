import React,{useContext} from 'react'
import Skeleton from 'react-loading-skeleton';
import usuarioContext from '../../../Context/UsuarioContext';
import './Titulo.css';

const Titulo = () => {
    const{cargando}=useContext(usuarioContext);

    if(cargando){
        return(
        <Skeleton className="m-auto">
            <h1 className="text-center titulo-main"><Skeleton/></h1>
            <p className="parrafo"> <Skeleton/> </p>
        </Skeleton>

        )
    }
    else{
    return (
        <div className="m-auto">
            <h1 className="text-center titulo-main">Potenciá tus ideas!</h1>
            <p className="parrafo">Cafecito es una plataforma de crowdfunding que busca unir a creadores de contenido, ONGs o proyectos con gente que quiera aportar a lo que hacen.
    </p>
        </div>
    )
    }
}

export default Titulo;
