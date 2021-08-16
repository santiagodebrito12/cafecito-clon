import React from 'react'
import Explore from './Explore/Explore';
import { BrowserRouter as  Switch, Route, Redirect } from 'react-router-dom';
import Slider from './Slider/Slider';
import Input from '../main/Input/Input';
import Categorias from './Categorias/Categorias';
const Explorar = () => {
    return (
        <div>
       
        <Slider/>
        
        <div className="container">
         <Input
         mensaje="Buscar"
         placeholder="Buscar"/>

        </div>
        
        <div className="container">

        
        <Switch>
            <Route path="/explore" component={Explore}/>
            <Route path="/explore/categorias" component={Categorias}/>
            <Redirect to="/explore"/>
        </Switch>
        </div>
        </div>

    )
}

export default Explorar;
