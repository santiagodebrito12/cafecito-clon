import React from 'react'
import Explore from './Explore/Explore';
import { BrowserRouter as  Switch, Route } from 'react-router-dom';

import Categorias from './Categorias/Categorias';
import UserDetail from './UserDetail/UserDetail';

const Explorar = () => {
    return (
        <>
       
        
        <div className="container mb-5">

        
        <Switch>
            <Route exact path="/explore" component={Explore}/>
            <Route exact path="/explore/categorias" component={Categorias}/>
            <Route exact path="/explore/user" component={UserDetail}/>
       
        </Switch>
        
         </div>
        </>

    )
}

export default Explorar;
