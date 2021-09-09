import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Explorar from './components/Explorar/Explorar';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Auth from './components/auth/Auth';
import Footer from './components/Footer/Footer';
import UsuarioState from './Context/UsuarioState';
import ThemeState from './Context/ThemeContext/ThemeState';


function Cafecito() {
  return (
    <UsuarioState>
      <ThemeState>
      <Router>
       <Header/>
      
      <Switch>
        <Route component={Main} exact path="/"/>
        <Route component={Explorar} exact path="/explore"/>
        <Route component={Auth} exact path="/auth"/>
        

      </Switch>
      <Footer/>
    </Router>
    </ThemeState>
    </UsuarioState>
  );
}

export default Cafecito;
