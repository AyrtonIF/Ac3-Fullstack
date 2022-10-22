import React, {useState} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Usuario from './Usuario';
import Informacoes from './Informacoes';
import PaginaDoUsuario from './PaginaDoUsuario';
import Api from './Api';

export default function App() {
  return (
      <>
    <header>
     <p><Link to='/Home'> Home </Link></p>
     <p><Link to='/Usuario'> Usuario </Link></p>
     <p><Link to='/Informacoes'> Informacões </Link></p>
     <p><Link to='/PaginaDoUsuario'> PaginaDoUsuario </Link></p>
     <p><Link to='/Api'> Api </Link></p>
    </header>
    <main>
        <Switch>
          <Route path='/Home' component= {Home}/>
          <Route path='/Usuario' component= {Usuario}/>
          <Route path='/Informacoes' component= {Informacoes}/>
          <Route path='/PaginaDoUsuario' component= {PaginaDoUsuario}/>
          <Route path='/Api' component= {Api}/>
        </Switch>
      </main></>
  );
}
