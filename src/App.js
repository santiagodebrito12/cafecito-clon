import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Explorar from './components/Explorar/Explorar';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Auth from './components/auth/Auth';
import Footer from './components/Footer/Footer';
import UserDetailContainer from './components/UserDetailContainer/UserDetailContainer';
import UsuarioState from './Context/UsuarioState';

function Cafecito() {
  return (
    <UsuarioState>
      <Router>
       <Header/>
      
    <Switch>
        <Route component={Main} exact path="/"/>
        <Route component={Explorar} exact path="/explore"/>
        <Route component={Auth} exact path="/auth"/>
        <Route component={UserDetailContainer} exact path="/" />


      </Switch>
      <Footer/>
    </Router>
    </UsuarioState>
  );
}

export default Cafecito;
